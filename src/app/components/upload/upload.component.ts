import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IconService } from '../../services/icon.service';
import { FileDropService, FileDropEvent, FileDropEventType } from '../../services/file-drop.service';

@Component({
  selector: 'fm-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy {

  @ViewChild('dropTarget', { static: true })
  public dropTarget!: ElementRef<HTMLDivElement>;

  @ViewChild('fileInput', { static: true })
  public fileInput!: ElementRef<HTMLInputElement>;

  public isDragOver = false;

  private subscription: Subscription | null = null;

  constructor(
    protected fileDropService: FileDropService,
    protected iconService: IconService,
    protected router: Router
  ) { }

  public ngOnInit() {
    const target = this.dropTarget.nativeElement;
    this.subscription = this.fileDropService.subscribe(target, (e: FileDropEvent) => {
      switch (e.type) {
        case FileDropEventType.ENTER: this.isDragOver = true; break;
        case FileDropEventType.LEAVE: this.isDragOver = false; break;
        case FileDropEventType.DROP: {

          const jsFile = this.getJSFile(e.files!);

          if (!!jsFile) {
            // if js file was dropped we can read it as text and throw it into the parser
            this.onFileSelect(jsFile);

          } else {
            // when the user didn't drop a js file just reset the ui and let him drop another file
            this.isDragOver = false;
          }
        }
      }
    });

    this.initFileInput();
  }

  public ngOnDestroy() {
    const target = this.dropTarget.nativeElement;
    this.fileDropService.unsubscribe(target, this.subscription!);
  }

  private initFileInput() {
    this.fileInput.nativeElement.addEventListener('change', e => {
      const input = this.fileInput.nativeElement;
      const files = input.files;
      const jsFile = this.getJSFile(files!);
      if (jsFile) {
        this.onFileSelect(jsFile);
      } else {
        input.value = '';
      }
    });
  }

  private getJSFile(files: FileList) {
    // find dropped js file
    let jsFile: File | null = null;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.match(/text\/javascript/)) {
        jsFile = files[i];
      }
    }
    return jsFile;
  }

  private onFileSelect(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.isDragOver = false;
      const result = (reader.result || '') as string;
      this.iconService.loadIcons(result);
      this.router.navigate(['choose']);
    };
    reader.readAsText(file);
  }

  public openFileBrowser() {
    this.fileInput.nativeElement.click();
  }

}
