import type { FC } from 'react';
import { useState } from 'react';

import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

import type { FormSelectProps } from './types';

export const FormSelect: FC<FormSelectProps> = ({ name, label, labelCol, required, tooltip, SelectProps, cb }) => {
  const [open, setOpen] = useState(false);

  const handleToggleDropdown = (): void => {
    setOpen((prev) => !prev);
  };

  return (
    <Controller
      name={name}
      rules={{ required }}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={label}
          labelCol={labelCol}
          required={required}
          validateStatus={error ? 'error' : undefined}
          help={error?.message}
          hasFeedback={!!error}
          tooltip={tooltip}
        >
          <Select
            {...field}
            open={open}
            onDropdownVisibleChange={handleToggleDropdown}
            placeholder={label}
            value={field.value}
            onChange={(value) => {
              field.onChange(value);
              if (cb) {
                cb(value);
              }
            }}
            status={error ? 'error' : undefined}
            {...SelectProps}
          />
        </Form.Item>
      )}
    />
  );
};
