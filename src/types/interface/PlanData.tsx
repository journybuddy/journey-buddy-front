import { TourInfo } from "./TourInfo";

export interface PlanData {
    startDate?: string;
    endDate?: string;
    transport?: string;
    selectedPlaces: TourInfo[];
    areaCode?: string;
    sigunguCode?: string;
  }