import React from "react";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function TokenSearch() {
  return (
    <div className="px-4 flex gap-x-2 h-12">
      {/**Değişecek */}
      <Command className="border rounded-full flex-1 h-12">
        <CommandInput
          placeholder="Search name or address"
          className="h-12 border-none"
        />
        {false && (
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandItem>
              <span>Calendar</span>
            </CommandItem>
          </CommandList>
        )}
      </Command>
      <Select>
        <SelectTrigger className="w-20 h-12 rounded-[50px] bg-patara_gray_75 px-2">
          <div className="h-8 w-8 bg-black rounded-full" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
