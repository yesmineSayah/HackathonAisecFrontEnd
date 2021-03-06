import { NgModule, ErrorHandler } from '@angular/core';
import {CommonModule} from '@angular/common';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import {MouvementPage} from './index/index';
import {MouvementDetails} from './details/details';
import {MouvementCreate} from './create/create';
import {MouvementEdit} from './edit/edit';
import {MouvementMyDetails} from './myDetails/myDetails';
import {MouvementMy} from './myMouvements/my';
import {MouvementMenu} from './menu/menu';
import {MouvementCheckin} from './checkin/checkin';
@NgModule({
  imports : [IonicModule.forRoot(MouvementModule),CommonModule],
  exports : [MouvementPage,MouvementDetails,MouvementCreate,MouvementEdit,MouvementMyDetails,MouvementMy,MouvementMenu,MouvementCheckin],
  declarations:[MouvementPage,MouvementDetails,MouvementCreate,MouvementEdit,MouvementMyDetails,MouvementMy,MouvementMenu,MouvementCheckin],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class MouvementModule {}
