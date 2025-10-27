/* eslint-disable no-unused-vars */

export enum UnitsOfMeasureDimention {
  INCHES = 'Inches',
  CENTIMETRS = 'Centimetrs',
}
export enum UnitsOfMeasureDimentionShort {
  INCHES_SHORT = 'in',
  CENTIMETRS_SHORT = 'cm',
}
export enum UnitsOfMeasureDimentionUpperCase {
  INCHES_UPPERCASE_SHORT = 'IN',
  CENTIMETRS_UPPERCASE_SHORT = 'CM',
}

export enum UnitsOfMeasureWeight {
  POUNDS_AND_OUNCES = 'Pounds & Ounces',
  GRAMS = 'Grams',
}

export enum UnitsOfMeasureWeightShort {
  POUNDS_AND_OUNCES_SHORT = 'lb',
  GRAMS_SHORT = 'gr',
}

export enum WheitMeasureType {
  LB_OZ = 'LB.OZ',
  KG_G = 'KG.G',
}

export const tagOptions: { value: string; label: string }[] = [
  { value: '1', label: 'Return request' },
  { value: '2', label: 'Return' },
  { value: '3', label: 'PDF' },
  { value: '4', label: 'Need PDF' },
  { value: '5', label: 'Not available to return' },
  { value: '6', label: 'Simular return' },
  { value: '7', label: 'Forwarding return' },
];
