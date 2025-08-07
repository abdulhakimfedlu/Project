import React from "react"
import { Input } from "@/components/ui/input"
import { FormControl,FormDescription,FormItem,FormLabel,FormMessage } from "@/components/ui/form";
const FormField=()=>(
    <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
);
export deafult FormField