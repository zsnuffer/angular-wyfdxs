import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './TaskList.component.html',
  styles: [
    `
    task-list {
        height: 800px;
        display:flex;
        flex-direction: row;
        }
        .spacer {display:flex; flex:1; flex-direction: column}
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class TaskListComponent {
  public gridData: StaffTaskList[] = [
    {
      Step: 'Send Instructions to Candidate',
      Status: 'Completed',
      DueDate: new Date('04/10/2022'),
      StartedDate: new Date('4/5/2022'),
      CompletedDate: new Date('04/06/2022'),
      Item: 'Review submitted document for accuracy',
      Completed: new Date('4/7/2022'),
    },
    {
      Step: '',
      Status: 'In Process',
      DueDate: new Date('04/15/2022'),
      StartedDate: new Date('4/6/2022'),
      CompletedDate: null,
      Item: 'Scan and Upload Document',
      Completed: null,
    },
    {
      Step: 'Treasurer Form Filed',
      Status: 'Open',
      DueDate: new Date('04/15/2022'),
      StartedDate: null,
      CompletedDate: null,
      Item: 'Notify Ethics Committee',
      Completed: new Date('4/7/2022'),
    },
  ];

  public stepList: Array<string> = ['Treasurer Form Filed'];
}

class StaffTaskList {
  Step: string;
  Status: string;
  DueDate: Date;
  StartedDate: Date;
  CompletedDate: Date;
  Item: string;
  Completed: Date;
}
