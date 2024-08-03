import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { Controller, UseFormReturn } from "react-hook-form";
import { FormSchemaType } from "@/schema/formSchema";

export default function SlippageSettings({
  form,
}: {
  form: UseFormReturn<FormSchemaType>;
}) {
  const { watch, setValue } = form;

  return (
    <div className="min-h-16 p-4 flex flex-col items-center bg-patara_gray_75 rounded-lg gap-y-4 ring-[1px] ring-patara_gray_100">
      <div className="flex items-center justify-between w-full">
        <p className="font-medium text-patara_black">Slippage Mode</p>
        <Controller
          name="user.settings.slippage_mode"
          control={form.control}
          render={({ field }) => (
            <RadioGroup
              className="flex"
              defaultValue={field.value}
              onValueChange={field.onChange}
            >
              <div className="flex items-center">
                <RadioGroupItem value="auto" id="auto" className="hidden" />
                <Label
                  htmlFor="auto"
                  className={cn(
                    "h-9 w-16 flex items-center justify-center cursor-pointer  text-sm font-medium  rounded-lg transition",
                    field.value === "auto"
                      ? "bg-patara_blue text-patara_gray_50"
                      : "bg-patara_gray_100 text-patara_gray_600"
                  )}
                >
                  Auto
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="fixed" id="fixed" className="hidden" />
                <Label
                  htmlFor="fixed"
                  className={cn(
                    "h-9 w-16 flex items-center justify-center cursor-pointer bg-patara_gray_100 text-sm font-medium text-patara_gray_600 rounded-lg transition",
                    field.value === "fixed"
                      ? "bg-patara_blue text-patara_gray_50"
                      : "bg-patara_gray_100 text-patara_gray_600"
                  )}
                >
                  Fixed
                </Label>
              </div>
            </RadioGroup>
          )}
        />
      </div>
      {watch("user.settings.slippage_mode") === "fixed" && (
        <div className="flex w-full justify-between items-center h-8">
          <p className="font-medium text-patara_black">Slippage Rate</p>
          <div className="flex gap-x-2">
            <Button
              type="button"
              variant="rate"
              size="rate"
              className="border-patara_gray_100 h-8 px-2 py-0"
              onClick={() => form.setValue("user.settings.slippage_rate", 0.3)}
            >
              0.3%
            </Button>
            <Button
              type="button"
              variant="rate"
              size="rate"
              className="border-patara_gray_100 h-8 px-2 py-0"
              onClick={() => form.setValue("user.settings.slippage_rate", 0.5)}
            >
              0.5%
            </Button>
            <Button
              type="button"
              variant="rate"
              size="rate"
              className="border-patara_gray_100 h-8 px-2 py-0"
              onClick={() => form.setValue("user.settings.slippage_rate", 1)}
            >
              1%
            </Button>
            <Button
              type="button"
              variant="rate"
              size="rate"
              className="border-patara_gray_100 h-8 px-2 py-0"
            >
              Custom
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
