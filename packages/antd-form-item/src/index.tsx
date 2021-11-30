import React, { FC } from "react";

interface AntdFormItemProps {
  error?: boolean;
}

const AntdFormItem: FC<AntdFormItemProps> = ({ error, children }) => {
  return (
    <div className={error ? "ant-form-item-has-error" : undefined}>
      {children}
    </div>
  );
};

export default AntdFormItem;
