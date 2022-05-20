import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-capacitor',
  templateUrl: './capacitor.page.html',
  styleUrls: ['./capacitor.page.scss'],
})
export class CapacitorPage implements OnInit {

  plugins = [
    { icon: 'camera', name: 'Camera', path: 'camera' },
    { icon: 'phone-portrait-outline', name: 'Device', path: 'device' },
    // { icon: 'cube-outline', name: 'Storage', path: 'storage' },
  ];

  constructor() { }

  ngOnInit() {
  }

  

}
