import { FC } from 'react';

import { Form, Radio } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

type RadioFormProps = {
  name: string;
  label?: string;
  required?: boolean;
  options: { label: string; value: any }[];
};

export const FormRadio: FC<RadioFormProps> = ({ name, label, required = false, options }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required ? 'This field is required' : undefined }}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={label}
          required={required}
          help={error?.message}
          validateStatus={error ? 'error' : undefined}
          hasFeedback={!error}
          className="mb-0"
        >
          <Radio.Group className="flex flex-col" {...field} value={field.value}>
            {options.map((option) => (
              <Radio className="mb-2" key={option.value} value={option.value}>
                {option.label}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
      )}
    />
  );
};
