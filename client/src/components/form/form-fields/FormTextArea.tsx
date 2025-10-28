import { FC } from 'react';

import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

import type { FormTextAreaProps } from './types';

export const FormTextArea: FC<FormTextAreaProps> = ({ name, label, required, InputProps }) => (
  <Controller
    name={name}
    rules={{ required }}
    render={({ field, fieldState: { error } }) => (
      <Form.Item
        className="mb-4"
        label={label}
        help={error?.message}
        required={required}
        validateStatus={error ? 'error' : undefined}
      >
        <Input.TextArea {...InputProps} {...field} status={error ? 'error' : undefined} />
      </Form.Item>
    )}
  />
);
