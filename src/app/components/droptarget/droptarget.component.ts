import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IconService } from '../../services/icon.service';

@Component({
  selector: 'fm-droptarget',
  templateUrl: './droptarget.component.html',
  styleUrls: ['./droptarget.component.scss']
})
export class DroptargetComponent implements OnInit {

  constructor(
    protected readonly ngZone: NgZone,
    protected readonly router: Router,
    protected readonly iconService: IconService
  ) { }

  public ngOnInit() {
    ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(event => {
      document.addEventListener(event, (e) => {
        e.preventDefault();
      });
    });

    document.addEventListener('drop', (e) => {
      const droppedFiles = e.dataTransfer.files;
      this.ngZone.run(() => {
        this.loadfile(droppedFiles[0]);
      });
    });
  }

  protected loadfile(file: File) {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.iconService.loadIcons(fileReader.result as string);
      this.router.navigate(['choose']);
    };
    fileReader.readAsText(file);
  }


}
