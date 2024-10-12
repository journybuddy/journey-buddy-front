import { TourInfo } from "./TourInfo";

export interface ScheduleInfo {
    planName?: string;
    startDate?: string;
    endDate?: string;
    transport?: string;
    schedules?: TourInfo[]
  }