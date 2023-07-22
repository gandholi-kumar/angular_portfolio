export interface IMedicalHistory {
  parameterNames: string[];
  label?: string;
  oldValue: string | null;
  newValue: string | null;
  changedBy: string;
  updatedOn: string;
  task: string;
  kind?: string;
  valueCategory?: string;
}
