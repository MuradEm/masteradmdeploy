import { ReactNode } from "react";

export interface timeReportProps {
  register_id: number;
  subproject_id?: number;
  status: number;
  date: string;
  time_in: string;
  time_out: string;
  total_time: number;
  description: string;
  break_time: string;
  disapproval_reason: string;
}
export interface SelectOption {
  value: number;
  label: string;
  group: string;
}

export interface GroupedOption {
  label: string;
  options: SelectOption[];
}
export interface AppContextProviderProps {
  children: ReactNode;
}

export interface SelectOption {
  value: number;
  label: string;
}

export interface Client {
  client_id: number;
  client_name: string;
}

export interface Place {
  place_id: number;
  place_name: string;
  place_no_work?: boolean;
  color_view: string; //Hexadecimal code for colors
  client_id?: number;
}

export interface Shift {
  shift_id: number;
  shift_nr: number;
  shift_name: string;
  time_in: string;
  time_out: string;
  client_id?: number;
}

export interface WorkShift {
  shift_date: string;
  place_id: number;
  shift_id: number;
  invalid: boolean;
  justification: string;
}

export interface Day {
  display: number; //The day number of the month
  date: string; //The date in format YYYY-MM-DD
  local?: string; //The color that will be displayed according to the workplace data
  schedule?: number; //The work period id
  week?: number; //The year week
  type?: string; //The type of the day (norma or extended)
}
export interface Subproject {
  project_name: string;
  subproject_id: number;
  subproject_name: string;
}

export interface Task {
  task_id: number;
  tasklist_id: number;
  description: string;
}

export interface NotificationsProps {
  id: number;
  message: string;
  read: string;
  timestamp: string;
}
