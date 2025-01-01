import { UseFormReturn } from "react-hook-form";

export default interface IInput {
  name: string;
  placeholder?: string;
  type?: "text" | "number";
  form: UseFormReturn<any>;
  label: string;
  cn?: string;
  props?: any;
}
