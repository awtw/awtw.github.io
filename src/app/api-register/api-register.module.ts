import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ApiRegisterRoutingModule } from './api-register-routing.module';
import { CommonService } from '../btag-common/common.service';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ApiRegisterService } from './api-register.service';
import { ContainerComponent } from './container/container.component';
import { AddNewComponent } from './add-new/add-new.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { EditHeaderComponent } from './edit-header/edit-header.component';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [
    ContainerComponent,
    AddNewComponent,
    EditComponentComponent,
    EditHeaderComponent
  ],
  imports: [
    ToastrModule.forRoot(),
		ModalModule.forRoot(),
		TooltipModule.forRoot(),
    AlertModule.forRoot(),
    CommonModule,
    FormsModule,
		AgGridModule.withComponents(),
		ReactiveFormsModule,
    ApiRegisterRoutingModule
  ],
  providers: [
    CommonService, ApiRegisterService
  ],
  entryComponents: [

  ]
})
export class ApiRegisterModule { }
