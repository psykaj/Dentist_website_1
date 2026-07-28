"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
interface DatePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function DatePicker({ value, onChange, className }: DatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Temporary internal value to allow cancel
  const [tempValue, setTempValue] = React.useState<string | undefined>(value);

  React.useEffect(() => {
    setTempValue(value);
  }, [value, isOpen]);

  // Handle clicking outside to close
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleCancel = () => {
    setIsOpen(false);
    setTempValue(value); // reset to actual value
  };

  const handleOk = () => {
    if (tempValue && onChange) {
      onChange(tempValue);
    }
    setIsOpen(false);
  };

  const displayDate = value ? format(new Date(value), "dd/MM/yyyy") : "dd/mm/yyyy";

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-8 w-full items-center justify-between rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors hover:bg-slate-50 outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          !value && "text-slate-600",
          className
        )}
      >
        <span>{displayDate}</span>
        <CalendarIcon className="h-4 w-4 text-slate-500" />
      </button>

      {isOpen && (
        <div className="absolute z-50 top-[calc(100%+8px)] left-0 shadow-2xl rounded-2xl border border-slate-100 bg-white">
          <Calendar
            value={tempValue}
            onChange={setTempValue}
            onCancel={handleCancel}
            onOk={handleOk}
          />
        </div>
      )}
    </div>
  );
}
