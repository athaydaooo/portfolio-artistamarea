import { FieldNames } from "@/components/sections/contact";

export function getInvalidFieldClass(
    invalidFields: FieldNames[],
    fieldName: FieldNames
): string {
    return invalidFields.includes(fieldName) ? "invalid-field" : "valid-field";
}
