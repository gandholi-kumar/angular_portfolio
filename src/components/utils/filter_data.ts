import {
  IMedicalHistory,
  medicalHistoryKeys,
} from '../models/medicalHistoryData.model';
import { medicalHistoryColumnDefinition } from './medical_history_data';

// filtered columns
const filteredKeys: Partial<medicalHistoryKeys>[] =
  medicalHistoryColumnDefinition
    .filter((column) => column.isFilterable)
    .map((col) => col.identifier);

export const filterHistoryTable = (
  tableData: IMedicalHistory[],
  search: string,
  keys: medicalHistoryKeys[] = filteredKeys
) => {
  console.log('search', search);
  if (
    tableData.length === 0 ||
    keys.length === 0 ||
    typeof search === 'undefined'
  ) {
    return tableData;
  } else {
    return tableData.filter((historyData) => {
      return keys.some((key) => {
        String(historyData[key]).toLowerCase().includes(search.toLowerCase());
        // const val = historyData[key];
        // return val ? val.includes(search.toLowerCase()) : [];
      });
    });
  }
};
