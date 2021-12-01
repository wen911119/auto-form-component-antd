import React from "react";
import Text from "../src/index";

export default {
  title: "base/Text",
  component: Text,
};

export const Default = () => <Text>默认</Text>;

Default.storyName = '默认';

export const Styled = () => (
  <Text size={20} color="#f85f4f" weight={500}>
    设置大小（20）/颜色（红色）/字重（500）
  </Text>
);

Styled.storyName = '设置颜色大小字重'
