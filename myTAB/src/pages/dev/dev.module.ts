import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevPage } from './dev';

@NgModule({
  declarations: [
    DevPage,
  ],
  imports: [
    IonicPageModule.forChild(DevPage),
  ],
  exports: [
    DevPage
  ]
})
export class DevPageModule {}
