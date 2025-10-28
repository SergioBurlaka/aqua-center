import { FC } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

import { getLoadingIndicatorSize } from './shared/utils/getLoadingIndicatorSize';
import type { FormTextInputProps } from './types';

export const FormTextInput: FC<FormTextInputProps> = ({
  name,
  label,
  labelCol,
  labelAlign,
  required,
  loading,
  tooltip,
  className,
  InputProps,
}) => {
  const loadingIndicatorSize = getLoadingIndicatorSize(InputProps?.size);
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          className={className}
          label={label}
          labelCol={labelCol}
          labelAlign={labelAlign}
          help={error?.message}
          required={required}
          validateStatus={error ? 'error' : undefined}
          tooltip={tooltip}
        >
          <Input
            {...field}
            {...InputProps}
            value={InputProps?.type === 'number' && field.value !== undefined ? String(field.value) : field.value}
            onChange={(e) => {
              const inputValue = e.target.value.trim();
              const newValue = InputProps?.type === 'number' && inputValue !== '' ? Number(inputValue) : inputValue;

              field.onChange(newValue);
            }}
            onBlur={(e) => {
              if (InputProps?.type === 'number' && e.target.value === '') {
                field.onChange('');
              }
            }}
            status={error ? 'error' : undefined}
            suffix={
              loading ? (
                <LoadingOutlined style={{ fontSize: loadingIndicatorSize }} className="text-gray-400" spin />
              ) : (
                <span />
              )
            }
          />
        </Form.Item>
      )}
    />
  );
};
