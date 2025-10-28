import { FC, useCallback } from "react";

import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import type { SubmitHandler } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { FormPasswordInput, FormTextInput } from "@components/form/form-fields";

import { useLoginMutation } from "@shared/api/auth";

import {
  type LoginFormSchema,
  loginFormSchema,
} from "./schemas/loginFormSchema";

const LoginPage: FC = () => {
  const formMethods = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });
  const navigate = useNavigate();

  const loginMutation = useLoginMutation();

  const handleSubmit: SubmitHandler<LoginFormSchema> = useCallback(
    (data) => {
      loginMutation.mutate(data, {
        onSuccess: () => {
          navigate("/dashboard");
        },
      });
    },
    [loginMutation, navigate]
  );

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
        <FormTextInput
          name="email"
          required
          InputProps={{
            placeholder: "Email",
            addonBefore: <MailOutlined />,
            size: "large",
          }}
        />
        <FormPasswordInput
          name="password"
          placeholder="Password"
          size="large"
          addonBefore={<LockOutlined />}
          required
        />
        <div className="flex w-full  flex-col gap-4">
          <Button type="primary" htmlType="submit" size="large" block>
            Login
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginPage;
