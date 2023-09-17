import React from "react";
import { CheckBox } from "components";

export default {
  title: "news_blog/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  shape: "round",
  color: "black_900",
  size: "xs",
  variant: "outline",
  label: "Checkbox",
  inputClassName: "mr-1",
};
