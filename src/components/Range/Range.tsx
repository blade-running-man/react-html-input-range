import React, { useRef } from 'react';
import "./range.css";

export interface RangeProps  {
  styleName?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: any) => void;
  vertical?: boolean;
  disabled?: boolean;
};

const Range = ({
  value,
  min = 0,
  max = 100,
  step,
  onChange,
  vertical = false,
  disabled = false}: RangeProps) => {

  const rangeRef = useRef(null);

  const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value)
    onChange(inputValue);
  }

  return (
    <div className="input-range-container">
      <input
        ref={rangeRef}
        className={`input-range input-range_${vertical ? 'vertical' : 'horizontal'}`}
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChangeHandler}
        disabled={disabled} />
    </div>
  )
}

export default Range;
