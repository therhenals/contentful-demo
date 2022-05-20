import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements AfterViewInit {

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  constructor() { }

  ngAfterViewInit() {
    this.createMap();
  }

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: 'AIzaSyAbYc1xS0-Gh3-M7QxJNB6D8rAi0DM8hu8',
      config: {
        center: {
          lat: 9.3214828,
          lng: -75.2986819,
          
        },
        width: 100,
        height: 100,
        zoom: 14,
      },
    });
  }

}
