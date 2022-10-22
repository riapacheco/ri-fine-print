
export interface IWork {
  id: number | undefined;
  company?: string;
  job_title?: string;
  start_date?: Date | string;
  end_date?: Date | string;
  duties?: string;
  url?: string;
  dutiesString?: string;
}