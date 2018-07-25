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

  public get farIcons() {
    return this.IconService.availableIcons.far || [];
  }

  public get falIcons() {
    return this.IconService.availableIcons.fal || [];
  }

  public get fasIcons() {
    return this.IconService.availableIcons.fas || [];
  }

  public get fabIcons() {
    return this.IconService.availableIcons.fab || [];
  }

}
