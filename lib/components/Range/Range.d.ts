/// <reference types="react" />
import "./range.css";
export interface RangeProps {
    styleName?: string;
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (value: any) => void;
    vertical?: boolean;
    disabled?: boolean;
}
declare const Range: ({ value, min, max, step, onChange, vertical, disabled }: RangeProps) => JSX.Element;
export default Range;
