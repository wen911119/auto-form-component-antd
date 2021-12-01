import React, { FC } from "react";
import { Input, InputProps } from "antd";
import AntdFormItem from "@ruiyun/antd-form-item";
import { useUpdateEffect } from 'ahooks';

interface LinkDataChangeParams {
  linkData: Object;
  onChange: (value: any) => void;
  validate: () => Promise<string>;
}

export interface AntdInputExtraProps {
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  validateOnLinkDataChange?: boolean;
  onLinkDataChange?: (params: LinkDataChangeParams) => void;
}

interface FormFieldInjectedProps {
  error?: boolean;
  linkData?: Object;
  validate: () => Promise<string>;
}

type AutoFormAntdInputProps = InputProps &
  AntdInputExtraProps &
  FormFieldInjectedProps;

const AutoFormAntdInput: FC<AutoFormAntdInputProps> = ({
  validateOnBlur,
  validateOnChange,
  validateOnLinkDataChange,
  error,
  linkData,
  style,
  validate,
  onBlur,
  onChange,
  placeholder = "请输入",
  onLinkDataChange,
  ...rest
}) => {
  useUpdateEffect(() => {
    onLinkDataChange?.({
      linkData,
      onChange,
      validate,
    });
    if (validateOnLinkDataChange) {
      validate();
    }
  }, [JSON.stringify(linkData)]);
  const handleOnChange = (event) => {
    if (validateOnChange) {
      validate();
    }
    onChange?.(event);
  };
  const handleOnBlur = (event) => {
    if (validateOnBlur) {
      validate();
    }
    onBlur?.(event);
  };
  return (
    <AntdFormItem error={error}>
      <Input
        {...rest}
        placeholder={placeholder}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
    </AntdFormItem>
  );
};

export default AutoFormAntdInput;
