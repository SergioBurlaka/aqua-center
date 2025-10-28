import type { FC } from 'react';

import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

import type { FormPasswordInputProps } from './types';

export const FormPasswordInput: FC<FormPasswordInputProps> = ({
  name,
  label,
  required,
  prefix,
  addonBefore,
  placeholder,
  size = 'middle',
}) => (
  <Controller
    name={name}
    rules={{ required }}
    render={({ field, fieldState: { error } }) => (
      <Form.Item label={label} help={error?.message} validateStatus={error ? 'error' : undefined} hasFeedback={!!error}>
        <Input.Password
          placeholder={placeholder}
          status={error ? 'error' : undefined}
          prefix={prefix}
          size={size}
          addonBefore={addonBefore}
          {...field}
        />
      </Form.Item>
    )}
  />
);
