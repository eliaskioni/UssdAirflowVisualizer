/**
 * Created by kioni on 2/4/17.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import {Journey} from "./journey.component";
import {routing} from "./journey.routing";
import {ModalModule} from "ng2-bootstrap";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    ModalModule.forRoot(),
  ],
  declarations: [
    Journey,
  ]
})
export class JourneyModule {}
