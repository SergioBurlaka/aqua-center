import { FC } from 'react';

import { Checkbox, Form } from 'antd';
import type { CheckboxProps } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

import type { FormCheckboxProps } from './types';

export const FormCheckbox: FC<FormCheckboxProps & { checkboxProps?: CheckboxProps }> = ({
  name,
  label,
  checkboxProps,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <Form.Item
          status={error ? 'error' : ''}
          help={error?.message}
          validateStatus={error ? 'error' : undefined}
          hasFeedback={!!error}
          className="my-2"
        >
          <Checkbox
            {...checkboxProps}
            checked={value}
            onClick={() => {
              onChange(!value);
            }}
          >
            {label}
          </Checkbox>
        </Form.Item>
      )}
    />
  );
};
