import React from "react";
import { Input, Select } from "antd";
import "antd/dist/antd.css";
import AntdFormItem from "../src/index";

export default {
  title: "base/AntdFormItem",
  component: AntdFormItem,
};

export const InputHasError = () => (
  <AntdFormItem error>
    <Input style={{ width: "200px" }} />
  </AntdFormItem>
);

InputHasError.storyName = "Input的错误态";

export const SelectHasError = () => (
  <AntdFormItem error>
    <Select
      style={{ width: "200px" }}
      options={[
        {
          label: "张三",
          value: 1,
        },
      ]}
    />
  </AntdFormItem>
);

SelectHasError.storyName = "Select的错误态";
