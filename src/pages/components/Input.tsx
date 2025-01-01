import IInput from "@/@types/Input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useState } from "react";

export default function FormInput({
  name,
  form,
  type,
  label,
  props,
  cn,
}: IInput) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative">
          {/* Animated Label */}
          <FormLabel
            className={`
              absolute select-none left-2 transition-all duration-300 ease-in-out 
              ${
                isFocused || hasValue
                  ? "top-[-21px] text-sm text-white/40"
                  : "top-2 text-base"
              }
            `}
          >
            {label}
          </FormLabel>

          <FormControl>
            <Input
              {...field}
              type={type}
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => {
                setIsFocused(false);
                setHasValue(!!e.target.value);
              }}
              className={`${cn}`}
              onKeyDown={props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
