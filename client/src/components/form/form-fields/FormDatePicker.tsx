import { FC } from 'react';

import { Form } from 'antd';
import { Controller } from 'react-hook-form';

import { FormatConstants } from '@shared/constants';

import { DatePicker } from '../../general';
import type { FormDatePickerProps } from './types';

export const FormDatePicker: FC<FormDatePickerProps> = ({ name, label, required, DatePickerProps }) => (
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
        <DatePicker
          {...DatePickerProps}
          {...field}
          format={FormatConstants.DATE_FNS_DATE_FORMAT}
          status={error ? 'error' : undefined}
          className="w-full"
        />
      </Form.Item>
    )}
  />
);
