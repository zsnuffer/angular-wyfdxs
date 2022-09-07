import { GanttDependency } from '@progress/kendo-angular-gantt';
import { DependencyType } from '@progress/kendo-angular-gantt';

export interface Task {
  id: number;
  title: string;
  start: Date;
  end: Date;
  completionRatio: number;
  subtasks?: Task[];
}

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Candidate Filing: Rick Warren',
    start: new Date('2022-04-01T00:00:00.000Z'),
    end: new Date('2022-04-08T00:00:00.000Z'),
    completionRatio: 0.1,
    subtasks: [
      {
        id: 11,
        title: 'File For Candidacy: Complete',
        start: new Date('2022-04-01T00:00:00.000Z'),
        end: new Date('2022-04-03T00:00:00.000Z'),
        completionRatio: 1.0,
      },
      {
        id: 12,
        title: 'Send Instructions to Candidate',
        start: new Date('2022-04-02T00:00:00.000Z'),
        end: new Date('2022-04-04T00:00:00.000Z'),
        completionRatio: 1.0,
      },
      {
        id: 13,
        title: 'Filing Fee Payement',
        start: new Date('2022-04-02T00:00:00.000Z'),
        end: new Date('2022-04-04T00:00:00.000Z'),
        completionRatio: 1.0,
      },
      {
        id: 14,
        title: 'Treasurer Form Filed',
        start: new Date('2022-04-02T00:00:00.000Z'),
        end: new Date('2022-04-05T02:00:00.000Z'),
        completionRatio: 0.1,
      },
      {
        id: 15,
        title: 'Campain Finance Reminder',
        start: new Date('2022-04-06T00:00:00.000Z'),
        end: new Date('2022-04-08T02:00:00.000Z'),
        completionRatio: 0.1,
      },
      {
        id: 16,
        title: 'Campain Forms Filed',
        start: new Date('2022-04-06T00:00:00.000Z'),
        end: new Date('2022-04-08T02:00:00.000Z'),
        completionRatio: 0.1,
      },
    ],
  },

  {
    id: 3,
    title: 'Candidate Filing: Phillip A. Buster',
    start: new Date('2022-04-01T00:00:00.000Z'),
    end: new Date('2022-04-08T00:00:00.000Z'),
    completionRatio: 0.1,
    subtasks: [
      {
        id: 31,
        title: 'File For Candidacy: Complete',
        start: new Date('2022-04-01T00:00:00.000Z'),
        end: new Date('2022-04-03T00:00:00.000Z'),
        completionRatio: 1.0,
      },
      {
        id: 32,
        title: 'Send Instructions to Candidate',
        start: new Date('2022-04-02T00:00:00.000Z'),
        end: new Date('2022-04-04T00:00:00.000Z'),
        completionRatio: 1.0,
      },
      {
        id: 33,
        title: 'Filing Fee Payement',
        start: new Date('2022-04-02T00:00:00.000Z'),
        end: new Date('2022-04-04T00:00:00.000Z'),
        completionRatio: 0.0,
      },
      {
        id: 34,
        title: 'Treasurer Form Filed',
        start: new Date('2022-04-02T00:00:00.000Z'),
        end: new Date('2022-04-05T02:00:00.000Z'),
        completionRatio: 1,
      },
      {
        id: 35,
        title: 'Campain Finance Reminder',
        start: new Date('2022-04-06T00:00:00.000Z'),
        end: new Date('2022-04-08T02:00:00.000Z'),
        completionRatio: 0.1,
      },
      {
        id: 36,
        title: 'Campain Forms Filed',
        start: new Date('2022-04-06T00:00:00.000Z'),
        end: new Date('2022-04-08T02:00:00.000Z'),
        completionRatio: 0.1,
      },
    ],
  },

  {
    id: 2,
    title: 'Candidate Filing: Elise Mccann',
    start: new Date('2022-04-01T00:00:00.000Z'),
    end: new Date('2022-04-08T00:00:00.000Z'),
    completionRatio: 0.1,
    subtasks: [
      {
        id: 21,
        title: 'File For Candidacy: Complete',
        start: new Date('2022-04-01T00:00:00.000Z'),
        end: new Date('2022-04-03T00:00:00.000Z'),
        completionRatio: 1.0,
      },
      {
        id: 22,
        title: 'Send Instructions to Candidate',
        start: new Date('2022-04-02T00:00:00.000Z'),
        end: new Date('2022-04-04T00:00:00.000Z'),
        completionRatio: 1.0,
      },
      {
        id: 23,
        title: 'Filing Fee Payement',
        start: new Date('2022-04-02T00:00:00.000Z'),
        end: new Date('2022-04-04T00:00:00.000Z'),
        completionRatio: 0.2,
      },
      {
        id: 24,
        title: 'Treasurer Form Filed',
        start: new Date('2022-04-02T00:00:00.000Z'),
        end: new Date('2022-04-05T02:00:00.000Z'),
        completionRatio: 0.5,
      },
      {
        id: 25,
        title: 'Campain Finance Reminder',
        start: new Date('2022-04-06T00:00:00.000Z'),
        end: new Date('2022-04-08T02:00:00.000Z'),
        completionRatio: 0.1,
      },
      {
        id: 26,
        title: 'Campain Forms Filed',
        start: new Date('2022-04-06T00:00:00.000Z'),
        end: new Date('2022-04-08T02:00:00.000Z'),
        completionRatio: 0.1,
      },
    ],
  },
];

export const dependencies: GanttDependency[] = [
  {
    id: 1,
    fromId: 1,
    toId: 11,
    type: DependencyType.FF,
  },
  {
    id: 1,
    fromId: 11,
    toId: 12,
    type: DependencyType.SF,
  },
  {
    id: 3,
    fromId: 11,
    toId: 13,
    type: DependencyType.SF,
  },
  {
    id: 4,
    fromId: 11,
    toId: 14,
    type: DependencyType.SF,
  },
  {
    id: 5,
    fromId: 11,
    toId: 15,
    type: DependencyType.SF,
  },
  {
    id: 6,
    fromId: 11,
    toId: 16,
    type: DependencyType.SF,
  },

  {
    id: 7,
    fromId: 2,
    toId: 21,
    type: DependencyType.FF,
  },
  {
    id: 8,
    fromId: 21,
    toId: 22,
    type: DependencyType.SF,
  },
  {
    id: 9,
    fromId: 21,
    toId: 23,
    type: DependencyType.SF,
  },
  {
    id: 10,
    fromId: 21,
    toId: 24,
    type: DependencyType.SF,
  },
  {
    id: 11,
    fromId: 21,
    toId: 25,
    type: DependencyType.SF,
  },
  {
    id: 12,
    fromId: 21,
    toId: 26,
    type: DependencyType.SF,
  },

  {
    id: 13,
    fromId: 3,
    toId: 31,
    type: DependencyType.FF,
  },
  {
    id: 14,
    fromId: 31,
    toId: 32,
    type: DependencyType.SF,
  },
  {
    id: 15,
    fromId: 31,
    toId: 33,
    type: DependencyType.SF,
  },
  {
    id: 16,
    fromId: 31,
    toId: 34,
    type: DependencyType.SF,
  },
  {
    id: 15,
    fromId: 31,
    toId: 35,
    type: DependencyType.SF,
  },
  {
    id: 17,
    fromId: 31,
    toId: 36,
    type: DependencyType.SF,
  },
];
