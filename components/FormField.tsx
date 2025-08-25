import React from "react";
import { Controller,FieldValues,Path,Control } from "react-hook-form";
import { Input } from "./ui/input";
import { FormMessage,FormItem,FormLabel, FormControl, FormDescription } from "./ui/form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password'; 
}

const FormField = ({control,name,label,placeholder,type="text"} : FormFieldProps<T>) => {
    return (<Controller name={name} control={control} render={({field})=>(
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input 
          className="input" 
          placeholder={placeholder}
          type={type}
           {...field} 
           />
        </FormControl>
        <FormMessage />
      </FormItem>
      )}
  />
);
};

export default FormField;
