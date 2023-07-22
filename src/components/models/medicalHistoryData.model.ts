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

type medicalHistoryKeys = keyof IMedicalHistory;

export interface IColumnDefinition {
  identifier: medicalHistoryKeys;
  sortable: boolean;
  headerLabel: string;
  width: number;
  showTooltip?: boolean;
  isFilterable?: boolean;
}
