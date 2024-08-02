import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { RotateCw, Settings } from "lucide-react";
import SlippageSettings from "./SlippageSettings";
import RouteSettings from "./RouteSettings";

export default function GeneralSettings() {
  return (
    <div className="absolute top-0 right-0 translate-x-full flex flex-col gap-y-2">
      <Dialog>
        <DialogTrigger className="h-9 w-9 flex items-center justify-center bg-patara_gray_100 rounded-lg">
          <Settings />
        </DialogTrigger>
        <DialogContent className="w-[480px] py-4 gap-y-5 border-0">
          <h2 className="mx-auto text-patara_black text-lg font-semibold h-10 flex items-center justify-center">
            General Settings
          </h2>
          <div className="flex flex-col gap-y-2">
            <SlippageSettings />
            <RouteSettings />
            <Button type="button">Save Settings</Button>
          </div>
        </DialogContent>
      </Dialog>
      <Button type="button" variant="settings" size="settings">
        <RotateCw />
      </Button>
    </div>
  );
}
