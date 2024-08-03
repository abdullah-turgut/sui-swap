import React from "react";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { UseFormReturn } from "react-hook-form";
import { FormSchemaType } from "@/schema/formSchema";

export default function RouteSettings({
  form,
}: {
  form: UseFormReturn<FormSchemaType>;
}) {
  return (
    <div className="h-16 p-4 w-full flex items-center justify-between bg-patara_gray_75 rounded-lg">
      <Label htmlFor="direct">Slippage Rate</Label>
      <Switch id="direct" className="h-7 w-[52px]" />
    </div>
  );
}
