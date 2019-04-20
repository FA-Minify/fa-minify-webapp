import { Component, OnInit, ViewChild, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { UploadEvent } from 'ngx-file-drop';
import { IconService } from '../../services/icon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fm-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy {

  @ViewChild('dropTarget')
  public dropTarget: ElementRef<HTMLDivElement>;

  @ViewChild('dropOverlay')
  public dropOverlay: ElementRef<HTMLDivElement>;

  public isDragOver = false;

  constructor(protected iconService: IconService, protected router: Router) { }

  public ngOnInit() {
    const native = this.dropTarget.nativeElement as HTMLDivElement;

    ['dragenter', 'dragstart'].forEach(event => native.addEventListener(event, this.dragEnterListener));
    ['dragleave', 'dragend'].forEach(event => native.addEventListener(event, this.dragLeaveListener));

    ['dragover'].forEach(event => native.addEventListener(event, (e: DragEvent) => {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    }));

    this.dropTarget.nativeElement.addEventListener('drop', (e) => {
      e.stopPropagation();
      e.preventDefault();

      this.isDragOver = false;
      const files = e.dataTransfer.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file.type.match(/text\/javascript/)) {
          const reader = new FileReader();

          reader.onload = () => {
            const result = (reader.result || '') as string;
            this.iconService.loadIcons(result);
            this.router.navigate(['choose']);
          };

          reader.readAsText(file);
        }
      }
    });
  }

  public ngOnDestroy() {
    const native = this.dropTarget.nativeElement;
    ['dragenter'].forEach(event => native.removeEventListener(event, this.dragEnterListener));
    ['dragleave', 'dragend', 'drop'].forEach(event => native.removeEventListener(event, this.dragLeaveListener));
  }

  private dragEnterListener = (e: DragEvent) => {
    this.isDragOver = true;

    e.stopPropagation();
    e.preventDefault();

    if (this.dropTarget && this.dropTarget.nativeElement) {
      this.dropTarget.nativeElement.classList.add('is-dragover');
    }
  }

  private dragLeaveListener = (e: DragEvent) => {
    this.isDragOver = false;

    e.stopPropagation();
    e.preventDefault();

    if (this.dropTarget && this.dropTarget.nativeElement) {
      this.dropTarget.nativeElement.classList.remove('is-dragover');
    }
  }


}
