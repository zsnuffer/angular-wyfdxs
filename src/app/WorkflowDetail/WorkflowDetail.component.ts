import { Component, ViewEncapsulation, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpProgressEvent,
  HttpEventType,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, concat } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'workflow',
  templateUrl: './WorkflowDetail.component.html',
  styles: [
    `
    workflow {
        height: 920px;
        display:flex;
        flex-direction: row;
        }
        .spacer {display:flex; flex:1; flex-direction: column}
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class WorkFlowDetailComponent {
  public StartDate: Date = new Date('4/1/2022');
  public EndDate: Date = new Date('6/7/2022');
  uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

  public gridData: StaffTaskList[] = [
    {
      ID: 1,
      Step: 'File for Candidacy',
      Status: 'Complete',
      DueDate: new Date('04/10/2022'),
      CompletedDate: new Date('04/06/2022'),
    },
    {
      ID: 2,
      Step: 'Send Instructions to Candidate',
      Status: 'Completed',
      DueDate: new Date('04/10/2022'),
      CompletedDate: new Date('04/5/2022'),
    },
    {
      ID: 3,
      Step: 'Filing Fee Payement',
      Status: 'Open',
      DueDate: new Date('04/10/2022'),
      CompletedDate: null,
    },
    {
      ID: 4,
      Step: 'Petition Filed',
      Status: 'N/A',
      DueDate: null,
      CompletedDate: null,
    },
    {
      ID: 5,
      Step: 'Treasurer Form Filed',
      Status: 'Open',
      DueDate: new Date('04/15/2022'),
      CompletedDate: null,
    },
    {
      ID: 6,
      Step: 'Campaign Finance Reminder',
      Status: null,
      DueDate: new Date('05/10/2022'),
      CompletedDate: null,
    },
    {
      ID: 7,
      Step: 'Campaign Finance Forms Filed',
      Status: null,
      DueDate: new Date('05/10/2022'),
      CompletedDate: null,
    },
  ];
  public checkListData: CheckList[] = [
    {
      IsComplete: true,
      Item: 'Review submitted document for accuracy and completeness',
      Completed: 'Cindy Clerk 4/7/2022',
    },
    {
      IsComplete: false,
      Item: 'Scan and upload document',
      Completed: null,
    },
    {
      IsComplete: false,
      Item: 'Notify Ethics Commission',
      Completed: null,
    },
  ];
  public stepList: Array<string> = ['Treasurer Form Filed'];
}
@Injectable()
export class UploadInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (req.url === 'saveUrl') {
      const events: Observable<HttpEvent<unknown>>[] = [0, 30, 60, 100].map(
        (x) =>
          of(<HttpProgressEvent>{
            type: HttpEventType.UploadProgress,
            loaded: x,
            total: 100,
          }).pipe(delay(1000))
      );

      const success = of(new HttpResponse({ status: 200 })).pipe(delay(1000));
      events.push(success);

      return concat(...events);
    }

    if (req.url === 'removeUrl') {
      return of(new HttpResponse({ status: 200 }));
    }

    return next.handle(req);
  }
}

class StaffTaskList {
  ID: number;
  Step: string;
  Status: string;
  DueDate: Date;
  CompletedDate: Date;
}
class CheckList {
  Item: string;
  Completed: string;
  IsComplete: boolean;
}
