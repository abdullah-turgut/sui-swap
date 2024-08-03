import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { RotateCw, Settings, X } from "lucide-react";
import SlippageSettings from "./SlippageSettings";
import RouteSettings from "./RouteSettings";
import { UseFormReturn } from "react-hook-form";
import { FormSchemaType } from "@/schema/formSchema";

export default function GeneralSettings({
  form,
}: {
  form: UseFormReturn<FormSchemaType>;
}) {
  console.log(form.formState.dirtyFields);
  return (
    <div className="absolute top-0 right-0 translate-x-full flex flex-col gap-y-2">
      <Dialog>
        <DialogTrigger className="h-9 w-9 flex items-center justify-center bg-patara_gray_100 rounded-lg">
          <Settings />
        </DialogTrigger>
        <DialogContent
          className="w-[480px] py-4 gap-y-5 border-0"
          onInteractOutside={(e) => e.preventDefault()}
          onPointerCancel={(e) => e.preventDefault()}
        >
          <DialogClose
            onClick={(e) => form.resetField("user.settings")}
            className="absolute top-4 right-4 flex items-center justify-center cursor-pointer"
            asChild
          >
            <X className="h-6 w-6" />
          </DialogClose>
          <DialogTitle hidden aria-describedby="settings"></DialogTitle>
          <DialogDescription
            hidden
            aria-describedby="settings"
          ></DialogDescription>
          <h2 className="mx-auto text-patara_black text-lg font-semibold h-10 flex items-center justify-center">
            General Settings
          </h2>
          <div className="flex flex-col gap-y-2">
            <SlippageSettings form={form} />
            <RouteSettings form={form} />
            <DialogClose asChild>
              <Button type="button">Save Settings</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <Button
        type="button"
        variant="settings"
        size="settings"
        onClick={() => form.reset()}
      >
        <RotateCw />
      </Button>
    </div>
  );
}
