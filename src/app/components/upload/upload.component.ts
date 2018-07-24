import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { IconService } from '../../services/icon.service';

@Component({
  selector: 'fm-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  @ViewChild('droptarget')
  public droptarget: ElementRef;

  constructor(
    protected readonly ngZone: NgZone,
    protected readonly Router: Router,
    protected readonly IconService: IconService
  ) { }

  ngOnInit() {
    this.prepareDropzone(this.droptarget.nativeElement as HTMLDivElement);
  }

  protected prepareDropzone(native: HTMLDivElement) {
    ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(event => {
      native.addEventListener(event, (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
    });

    ['dragenter', 'dragover'].forEach(event => {
      native.addEventListener(event, () => {
        native.classList.add('is-dragover');
      });
    });

    ['dragleave', 'dragend', 'drop'].forEach(event => {
      native.addEventListener(event, () => {
        native.classList.remove('is-dragover');
      });
    });

    native.addEventListener('drop', (e) => {
      const droppedFiles = e.dataTransfer.files;
      this.ngZone.run(() => {
        this.loadfile(droppedFiles[0]);
      });
    });
  }

  protected loadfile(file: File) {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.IconService.loadIcons(fileReader.result);
      this.Router.navigate(['choose']);
    };
    fileReader.readAsText(file);
  }

}
