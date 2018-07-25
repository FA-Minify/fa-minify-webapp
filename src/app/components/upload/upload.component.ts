import { Component, OnInit, ViewChild, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { IconService } from '../../services/icon.service';

@Component({
  selector: 'fm-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy {

  @ViewChild('droptarget')
  public droptarget: ElementRef;

  private dragEnterListener = (e: DragEvent) => {
    if (this.droptarget && this.droptarget.nativeElement) {
      this.droptarget.nativeElement.classList.add('is-dragover');
    }
  }

  private dragLeaveListener = (e: DragEvent) => {
    if (this.droptarget && this.droptarget.nativeElement) {
      this.droptarget.nativeElement.classList.remove('is-dragover');
    }
  }

  public ngOnInit() {
    const native = this.droptarget.nativeElement;
    ['dragenter'].forEach(event => native.addEventListener(event, this.dragEnterListener));
    ['dragleave', 'dragend', 'drop'].forEach(event => native.addEventListener(event, this.dragLeaveListener));
  }

  public ngOnDestroy() {
    const native = this.droptarget.nativeElement;
    ['dragenter'].forEach(event => native.removeEventListener(event, this.dragEnterListener));
    ['dragleave', 'dragend', 'drop'].forEach(event => native.removeEventListener(event, this.dragLeaveListener));
  }

}
