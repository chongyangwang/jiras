/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-13 10:31:43
 * @LastEditTime: 2021-08-13 14:02:12
 */

import React from "react";
import { Select } from "antd";
type Raw = string | number;

type SelectProps = React.ComponentProps<typeof Select>;

interface IdSelectProps
  extends Omit<SelectProps, "value" | "onChange" | "options"> {
  value: Raw | null | undefined;
  onChange: (value?: number) => void;
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}

const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value));

const IdSelect = (props: IdSelectProps) => {
  const { value, onChange, defaultOptionName, options, ...resetProps } = props;
  return (
    <Select
      value={toNumber(value)}
      onChange={(value) => onChange(toNumber(value) || undefined)}
      {...resetProps}
    >
      {defaultOptionName ? (
        <Select.Option value={0}>{defaultOptionName}</Select.Option>
      ) : null}
      {options?.map((option) => (
        <Select.Option key={option.id} value={option.id}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default IdSelect;
