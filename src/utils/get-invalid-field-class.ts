import { ContactFieldNames } from "@/types/contact-field-names.ts";

export function getInvalidFieldClass(
  invalidFields: ContactFieldNames[],
  fieldName: ContactFieldNames,
): string {
  return invalidFields.includes(fieldName) ? "invalid-field" : "valid-field";
}
