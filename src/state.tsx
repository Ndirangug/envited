export interface EventState {
  eventName?: string;
  host?: string;
  photo?: File | null;
  startTime?: Date;
  endTime?: Date;
  location?: string;
}

export const state: EventState = {};
