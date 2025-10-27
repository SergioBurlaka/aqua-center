/* eslint-disable no-unused-vars */

export enum FindOrderBy {
  UPC = 'upc',
  STORAGE_NUMBER = 'storage_number',
  TRACKER_NUMBER = 'tracker_number',
  PO_NUMBER = 'po_number',
  ASIN = 'asin',
  RMA = 'rma',
  RETURN_TRACKER = 'return_tracker',
}

export type FindOrderProps = {
  key_name: FindOrderBy;
  key_value: string;
};
