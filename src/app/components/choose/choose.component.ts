import { Component, OnInit } from '@angular/core';
import { IconService } from '../../services/icon.service';

@Component({
  selector: 'fm-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {

  constructor(
    protected readonly IconService: IconService
  ) { }

  ngOnInit() {
  }

  protected get farIcons() {
    return this.IconService.availableIcons.far || [];
  }

  protected get falIcons() {
    return this.IconService.availableIcons.fal || [];
  }

  protected get fasIcons() {
    return this.IconService.availableIcons.fas || [];
  }

  protected get fabIcons() {
    return this.IconService.availableIcons.fab || [];
  }

}
