"use client";

import * as React from "react";
import clsx from "../../../utils/clsx.ts";
import { FieldNames } from "@/components/sections/contact/index.tsx";

interface InputFieldProps {
  name: FieldNames;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  validateField: (field: FieldNames) => void;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  value,
  onChange,
  validateField,
  className = "",
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onBlur={() => {
        validateField(name);
      }}
      value={value}
      className={clsx(
        className,
        "overflow-hidden p-2.5 w-full text-xs md:text-base text-left rounded-md border border-gray-300",
      )}
    />
  );
};
