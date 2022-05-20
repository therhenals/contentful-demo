import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapacitorPage } from './capacitor.page';

const routes: Routes = [
  {
    path: '',
    component: CapacitorPage
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'device',
    loadChildren: () => import('./device/device.module').then( m => m.DevicePageModule)
  },
  {
    path: 'storage',
    loadChildren: () => import('./storage/storage.module').then( m => m.StoragePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapacitorPageRoutingModule {}
