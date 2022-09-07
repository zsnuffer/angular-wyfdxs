import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadsModule } from '@progress/kendo-angular-upload';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { GanttModule } from '@progress/kendo-angular-gantt';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { AppComponent } from './app.component';
import { TaskListComponent } from './TaskList/TaskList.component';
import {
  WorkFlowDetailComponent,
  UploadInterceptor,
} from './WorkflowDetail/WorkflowDetail.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    GanttModule,
    GridModule,
    DropDownsModule,
    DatePickerModule,
    UploadsModule,
  ],
  declarations: [AppComponent, TaskListComponent, WorkFlowDetailComponent],
  bootstrap: [WorkFlowDetailComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UploadInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}
