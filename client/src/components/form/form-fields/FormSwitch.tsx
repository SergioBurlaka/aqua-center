import type { FC } from 'react';

import { Form, Switch } from 'antd';
import { Controller } from 'react-hook-form';

import type { FormSwitchProps } from './types';

export const FormSwitch: FC<FormSwitchProps> = ({ name, label }) => (
  <Controller
    name={name}
    render={({ field: { value, onChange } }) => (
      <Form.Item label={label}>
        <Switch
          checked={value}
          onChange={(checked) => {
            onChange(checked);
          }}
        />
      </Form.Item>
    )}
  />
);
