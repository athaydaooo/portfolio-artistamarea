"use client";

import * as React from "react";
import { ContactFieldNames } from "@/types/contact-field-names.ts";
import clsx from "../../../utils/clsx.ts";

interface InputFieldProps {
  name: ContactFieldNames;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  validateField: (field: ContactFieldNames) => void;
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
