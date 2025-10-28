import { FC, PropsWithChildren } from 'react';

import { Card, Form, type FormProps as AntFormProps } from 'antd';

type FormContainerProps = {
  variant: 'page' | 'dialog';
  loading?: boolean;
  FormProps?: AntFormProps;
};

export const FormContainer: FC<PropsWithChildren<FormContainerProps>> = ({ variant, children, loading, FormProps }) => {
  const FormCard = (
    <Card loading={loading} bordered={variant === 'page'}>
      <Form layout={variant === 'dialog' ? 'vertical' : 'horizontal'} {...FormProps}>
        {children}
      </Form>
    </Card>
  );

  if (variant === 'page')
    return (
      <div className="mx-auto my-0 max-w-md justify-center">
        <div>{FormCard}</div>
      </div>
    );

  return FormCard;
};
