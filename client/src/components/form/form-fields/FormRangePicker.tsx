import { FC } from 'react';

import { Form } from 'antd';
import { DatePicker } from 'antd';
import { Controller } from 'react-hook-form';

import type { FormRangePickerProps } from './types';

const { RangePicker } = DatePicker;

export const FormRangePicker: FC<FormRangePickerProps> = ({ name, label, required, DatePickerProps }) => (
  <Controller
    name={name}
    rules={{ required }}
    render={({ field, fieldState: { error } }) => (
      <Form.Item
        label={label}
        required={required}
        help={error?.message}
        validateStatus={error ? 'error' : undefined}
        hasFeedback={!error}
      >
        <RangePicker {...DatePickerProps} {...field} status={error ? 'error' : undefined} className="w-full" />
      </Form.Item>
    )}
  />
);
