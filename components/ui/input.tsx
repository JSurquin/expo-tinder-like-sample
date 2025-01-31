import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { cn } from "~/lib/utils";

interface InputProps extends TextInputProps {
  className?: string;
}

export const Input = React.forwardRef<TextInput, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        className={cn(
          "h-12 rounded-lg border border-input bg-background px-4 text-foreground",
          className
        )}
        placeholderTextColor="#666"
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
