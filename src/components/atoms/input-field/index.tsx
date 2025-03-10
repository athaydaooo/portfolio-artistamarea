"use client";

import * as React from "react";
import clsx from "../../../utils/clsx.ts";

interface InputFieldProps {
  placeholder: string;
  value: string;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  className = "",
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      className={clsx(
        className,
        "overflow-hidden p-2.5 w-full text-xs md:text-base text-left rounded-md border border-gray-300",
      )}
    />
  );
};
