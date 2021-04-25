import React, {useState} from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Range, { RangeProps } from "./Range";

export default {
  title: "Components/Range",
  component: Range,
  argTypes: {
    value: 2,
    min: 0,
    max: 10,
    step: 1,
    onChange: () => { },
    vertical: false
  },
} as Meta;

const Template: Story<RangeProps> = (args) => {
  const [ value, setValue ] = useState(args.value)
  return (
    <div>
      <Range {...args} value={value} onChange={setValue} />
    </div>
  )
};

export const Primary = Template.bind({});
Primary.args = {
  value: 11,
  min: 0,
  max: 21,
  step: 1,
};

export const Vertical = Template.bind({});
Vertical.args = {
  value: 11,
  min: 0,
  max: 20,
  step: 1,
  vertical: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 11,
  min: 0,
  max: 20,
  step: 1,
  disabled: true
};
