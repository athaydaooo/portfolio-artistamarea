"use client";

import * as React from "react";
import clsx from "../../../utils/clsx.ts";

interface TextInputFieldProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  className?: string;
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  value,
  placeholder,
  onChange,
  className = "",
}) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={clsx(
        className,
        "overflow-hidden p-2.5 pb-20 w-full text-xs md:text-base text-left rounded-md border border-gray-300 min-h-[50px] resize-none",
      )}
    />
  );
};
