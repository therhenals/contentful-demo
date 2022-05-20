import { Component, OnInit } from '@angular/core';
import { DeviceInfo, Device } from '@capacitor/device';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {

  info: DeviceInfo;

  constructor() { }

  ngOnInit() {
  }

  async getInfo() {
    const info = await Device.getInfo();
    this.info = info;
  }

}
