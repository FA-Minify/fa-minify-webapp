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

  @ViewChild('dropTarget')
  public dropTarget: ElementRef<HTMLDivElement>;

  public isDragOver = false;

  private subscription: Subscription;

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

          // find dropped js file
          let jsFile: File = null;
          for (let i = 0; i < e.files.length; i++) {
            if (e.files[i].type.match(/text\/javascript/)) {
              jsFile = e.files[i];
            }
          }

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

  }

  public ngOnDestroy() {
    const target = this.dropTarget.nativeElement;
    this.fileDropService.unsubscribe(target, this.subscription);
  }

  public onFileSelect(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.isDragOver = false;
      const result = (reader.result || '') as string;
      this.iconService.loadIcons(result);
      this.router.navigate(['choose']);
    };
    reader.readAsText(file);
  }

}
