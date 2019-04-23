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

  protected emitterMap: {
    [a: string]: {
      target: HTMLElement | Node,
      emitter: EventEmitter<FileDropEvent>
    }
  } = {};

  private initListener(target: HTMLElement | Node) {
    ['dragenter', 'dragstart'].forEach(event => target.addEventListener(event, this.dragEnterListener.bind(this)));
    ['dragleave', 'dragend'].forEach(event => target.addEventListener(event, this.dragLeaveListener.bind(this)));
    ['dragover'].forEach(event => target.addEventListener(event, this.dragOverListener.bind(this)));
    ['drop'].forEach(event => target.addEventListener(event, this.dragDropListener.bind(this)));
  }

  private removeListener(target: HTMLElement | Node) {
    ['dragenter', 'dragstart'].forEach(event => target.removeEventListener(event, this.dragEnterListener.bind(this)));
    ['dragleave', 'dragend'].forEach(event => target.removeEventListener(event, this.dragLeaveListener.bind(this)));
    ['dragover'].forEach(event => target.removeEventListener(event, this.dragOverListener.bind(this)));
    ['drop'].forEach(event => target.removeEventListener(event, this.dragDropListener.bind(this)));
  }

  private dragEnterListener(e: DragEvent) {
    const target = e.target;
    const emitter = this.getEmitterForTarget(target);

    if (emitter) {
      emitter.emit({ baseEvent: e, type: FileDropEventType.ENTER });
    }
  }

  private dragLeaveListener(e: DragEvent) {
    const target = e.target;
    const emitter = this.getEmitterForTarget(target);

    if (emitter) {
      emitter.emit({ baseEvent: e, type: FileDropEventType.LEAVE });
    }
  }

  private dragOverListener(e: DragEvent) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    const target = e.target;
    const emitter = this.getEmitterForTarget(target);

    if (emitter) {
      emitter.emit({ baseEvent: e, type: FileDropEventType.OVER });
    }
  }

  private dragDropListener(e: DragEvent) {
    e.stopPropagation();
    e.preventDefault();
    const target = e.target;
    const emitter = this.getEmitterForTarget(target);

    if (emitter) {
      emitter.emit({ baseEvent: e, files: e.dataTransfer.files, type: FileDropEventType.DROP });
    }
  }

  public subscribe(target: HTMLElement | Node, cb: (e: FileDropEvent) => any) {
    this.initListener(target);
    const emitter = new EventEmitter<FileDropEvent>();
    this.emitterMap[this.randomId()] = { emitter, target };
    return emitter.subscribe(cb);
  }

  public unsubscribe(target: HTMLElement | Node, subscription: Subscription) {
    this.removeListener(target);
    subscription.unsubscribe();
  }

  private randomId() {
    return btoa('' + Math.random()).substring(0, 20);
  }

  private getEmitterForTarget(targetElement: EventTarget | HTMLElement | Node) {
    const id = Object.keys(this.emitterMap).find(mapId => {
      const { target } = this.emitterMap[mapId];
      return target === targetElement;
    });

    if (!!id) {
      return this.emitterMap[id].emitter;
    }

    return null;
  }
}
