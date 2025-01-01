import IInput from "@/@types/Input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";

export default function FormTextArea({ name, form, label }: IInput) {
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
            <Textarea
              {...field}
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => {
                setIsFocused(false);
                setHasValue(!!e.target.value);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
