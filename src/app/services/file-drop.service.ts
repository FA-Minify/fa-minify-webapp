import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

export enum FileDropEventType {
  DROP,
  ENTER,
  OVER,
  LEAVE
}

export interface FileDropEvent {
  baseEvent: DragEvent;
  type: FileDropEventType;
  files?: FileList;
}

@Injectable({ providedIn: 'root' })
export class FileDropService {

  protected emitterTargetArray: Array<{
    target: HTMLElement | Node,
    emitter: EventEmitter<FileDropEvent>
  }> = [];

  private initListener(target: HTMLElement | Node) {
    ['dragenter', 'dragstart'].forEach(event => target.addEventListener(event, this.dragEnterListenerRef));
    ['dragleave', 'dragend'].forEach(event => target.addEventListener(event, this.dragLeaveListenerRef));
    ['dragover'].forEach(event => target.addEventListener(event, this.dragOverListenerRef));
    ['drop'].forEach(event => target.addEventListener(event, this.dragDropListenerRef));
  }

  private removeListener(target: HTMLElement | Node) {
    ['dragenter', 'dragstart'].forEach(event => target.removeEventListener(event, this.dragEnterListenerRef));
    ['dragleave', 'dragend'].forEach(event => target.removeEventListener(event, this.dragLeaveListenerRef));
    ['dragover'].forEach(event => target.removeEventListener(event, this.dragOverListenerRef));
    ['drop'].forEach(event => target.removeEventListener(event, this.dragDropListenerRef));
  }

  private dragEnterListenerRef = (e: Event) => this.dragEnterListener(e as DragEvent);
  private dragEnterListener(e: DragEvent) {
    const target = e.target;
    const wrapper = this.emitterTargetArray.find(_wrapper => _wrapper.target === target);

    if (wrapper && wrapper.emitter) {
      wrapper.emitter.emit({ baseEvent: e, type: FileDropEventType.ENTER });
    }
  }

  private dragLeaveListenerRef = (e: Event) => this.dragLeaveListener(e as DragEvent);
  private dragLeaveListener(e: DragEvent) {
    const target = e.target;
    const wrapper = this.emitterTargetArray.find(_wrapper => _wrapper.target === target);

    if (wrapper && wrapper.emitter) {
      wrapper.emitter.emit({ baseEvent: e, type: FileDropEventType.LEAVE });
    }
  }

  private dragOverListenerRef = (e: Event) => this.dragOverListener(e as DragEvent);
  private dragOverListener(e: DragEvent) {
    e.stopPropagation();
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'copy';
    }
    const target = e.target;
    const wrapper = this.emitterTargetArray.find(_wrapper => _wrapper.target === target);

    if (wrapper && wrapper.emitter) {
      wrapper.emitter.emit({ baseEvent: e, type: FileDropEventType.OVER });
    }
  }

  private dragDropListenerRef = (e: Event) => this.dragDropListener(e as DragEvent);
  private dragDropListener(e: DragEvent) {
    e.stopPropagation();
    e.preventDefault();
    const target = e.target;
    const wrapper = this.emitterTargetArray.find(_wrapper => _wrapper.target === target);

    const files = e.dataTransfer?.files;
    if (!files) return;

    if (wrapper && wrapper.emitter) {
      wrapper.emitter.emit({ baseEvent: e, files, type: FileDropEventType.DROP });
    }
  }

  public subscribe(target: HTMLElement | Node, cb: (e: FileDropEvent) => any) {
    this.initListener(target);
    const emitter = new EventEmitter<FileDropEvent>();
    this.emitterTargetArray.push({ emitter, target });
    return emitter.subscribe(cb);
  }

  public unsubscribe(target: HTMLElement | Node, subscription: Subscription) {
    this.removeListener(target);
    this.emitterTargetArray = this.emitterTargetArray.filter(wrap => wrap.target !== target);
    subscription.unsubscribe();
  }

}
