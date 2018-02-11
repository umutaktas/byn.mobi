import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampaingDetailsPage } from './campaing-details';

@NgModule({
  declarations: [
    CampaingDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CampaingDetailsPage),
  ],
  exports: [
    CampaingDetailsPage
  ]
})
export class CampaingDetailsPageModule {}
