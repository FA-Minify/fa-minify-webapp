import { Injectable } from '@angular/core';
import { getIconsFromFile, IconType } from 'fa-minify';

@Injectable({ providedIn: 'root' })
export class IconService {

  public availableIcons = null;

  public emptyIcons = {
    fab: [], fal: [], far: [], fas: []
  };

  public loadIcons(fileContent: string) {
    const fileIcons = getIconsFromFile(fileContent);

    if (!fileIcons) {
      return;
    }

    this.availableIcons = {};
    Object.keys(fileIcons).forEach(type => {
      this.availableIcons[type] = Object.keys(fileIcons[type] || {}).map(iconKey => {
        return [...fileIcons[type][iconKey], iconKey];
      });
    });

  }
}
