import type { ReactNode } from 'react';

import type { InputProps, SelectProps } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import { TextAreaProps } from 'antd/es/input';
import type { PickerProps } from 'antd/lib/date-picker/generatePicker';

export type BaseFormFieldProps = {
  name: string;
  label?: string | ReactNode;
  required?: boolean;
};

export type FormTextInputProps = {
  loading?: boolean;
  tooltip?: string;
  className?: string;
  labelCol?: { span: number; offset: number };
  labelAlign?: 'left' | 'right';
  InputProps?: InputProps;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & BaseFormFieldProps;

export type FormPasswordInputProps = {
  prefix?: InputProps['prefix'];
  size?: InputProps['size'];
  addonBefore?: InputProps['addonBefore'];
  placeholder?: InputProps['placeholder'];
} & BaseFormFieldProps;

export type FormSelectProps = {
  tooltip?: string;
  SelectProps?: SelectProps;
  labelCol?: { span: number; offset: number };
  cb?: (value: any) => void;
} & BaseFormFieldProps;

export type FormSwitchProps = BaseFormFieldProps;

export type FormNumberInputProps = {
  size?: InputProps['size'];
  allowNegative?: boolean;
  placeholder?: string;
  tooltip?: string;
} & BaseFormFieldProps;

export type FormCheckboxProps = {
  label: ReactNode;
} & Omit<BaseFormFieldProps, 'label'>;

export type FormDatePickerProps = {
  DatePickerProps?: PickerProps<Date>;
} & BaseFormFieldProps;

export type FormRangePickerProps = {
  DatePickerProps?: RangePickerProps;
} & BaseFormFieldProps;

export type FormTextAreaProps = {
  InputProps?: TextAreaProps;
} & BaseFormFieldProps;
