"use client";

import * as React from "react";
import { ContactFieldNames } from "@/types/contact-field-names.ts";
import clsx from "../../../utils/clsx.ts";

interface TextInputFieldProps {
  name: ContactFieldNames;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  validateField: (field: ContactFieldNames) => void;
  className?: string;
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  value,
  placeholder,
  onChange,
  name,
  validateField,
  className = "",
}) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onBlur={() => {
        validateField(name);
      }}
      className={clsx(
        className,
        "overflow-hidden p-2.5 pb-20 w-full text-xs md:text-base text-left rounded-md border border-gray-300 min-h-[50px] resize-none",
      )}
    />
  );
};
