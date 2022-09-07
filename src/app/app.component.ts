import { Component, ViewEncapsulation } from '@angular/core';
import { GanttDependency } from '@progress/kendo-angular-gantt';
import { Task, tasks, dependencies } from './hierarchical-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [
    `
    my-app {
         height: 100%;
        }
        
      .k-task.more-than-half {
        background-color: forestgreen;
        color: white;
      }
      .k-task.less-than-half 
      {
        background-color: #DAA520;
        color: white;
      }
      .summary-task-content {
        color: white;
        font-size: 8px;
      }
      .task-content {
        overflow: hidden;
      }
      .k-task.summary-task {
          background-color:rgb(13, 110, 253);
      }
      .k-task.not-started{ 
          background-color: rgb(185, 74, 72);
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public data: Task[] = tasks;
  public dependencies: GanttDependency[] = dependencies;

  public taskClass(dataItem: Task): { [className: string]: boolean } {
    if (dataItem.subtasks != null) {
      return { 'summary-task': true };
    } else {
      const moreThanHalfCompleted = dataItem.completionRatio > 0.5;
      const notStarted = dataItem.completionRatio < 0.1;
      if (!notStarted) {
        return {
          'more-than-half': moreThanHalfCompleted,
          'less-than-half': !moreThanHalfCompleted,
        };
      } else {
        return { 'not-started': notStarted };
      }
    }
  }
}
