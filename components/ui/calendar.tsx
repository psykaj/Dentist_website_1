"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addMonths, subMonths, getDaysInMonth, startOfMonth, getDay, isSameDay, setMonth, setYear, addYears, subYears } from "date-fns";
import { Button } from "@/components/ui/button";

interface CalendarProps {
  value?: string;
  onChange?: (date: string) => void;
  onCancel?: () => void;
  onOk?: () => void;
}

type CalendarView = "days" | "months" | "years";

export function Calendar({ value, onChange, onCancel, onOk }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(
    value ? new Date(value) : new Date()
  );
  
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    value ? new Date(value) : null
  );

  const [view, setView] = React.useState<CalendarView>("days");

  // To keep track of the displayed decade in years view
  const [decadeStart, setDecadeStart] = React.useState(
    Math.floor(currentMonth.getFullYear() / 10) * 10
  );

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDayOfMonth = getDay(startOfMonth(currentMonth));
  
  // --- Handlers ---
  const handlePrev = () => {
    if (view === "days") setCurrentMonth(subMonths(currentMonth, 1));
    else if (view === "months") setCurrentMonth(subYears(currentMonth, 1));
    else if (view === "years") setDecadeStart(prev => prev - 10);
  };

  const handleNext = () => {
    if (view === "days") setCurrentMonth(addMonths(currentMonth, 1));
    else if (view === "months") setCurrentMonth(addYears(currentMonth, 1));
    else if (view === "years") setDecadeStart(prev => prev + 10);
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
    if (onChange) {
      onChange(format(newDate, "yyyy-MM-dd"));
    }
  };

  const handleMonthClick = (monthIndex: number) => {
    setCurrentMonth(setMonth(currentMonth, monthIndex));
    setView("days");
  };

  const handleYearClick = (year: number) => {
    setCurrentMonth(setYear(currentMonth, year));
    setView("months");
  };

  // --- Render helpers ---
  const renderHeader = () => {
    let title = "";
    if (view === "days") {
      title = format(currentMonth, "MMMM yyyy");
    } else if (view === "months") {
      title = format(currentMonth, "yyyy");
    } else if (view === "years") {
      title = `${decadeStart} - ${decadeStart + 9}`;
    }

    return (
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={handlePrev} 
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors bg-white shadow-sm border border-slate-100"
          type="button"
        >
          <ChevronLeft className="w-4 h-4 text-slate-600" />
        </button>
        
        <button
          onClick={() => {
            if (view === "days") setView("months");
            else if (view === "months") {
              setDecadeStart(Math.floor(currentMonth.getFullYear() / 10) * 10);
              setView("years");
            }
          }}
          className="font-semibold text-slate-900 text-[15px] hover:bg-slate-100 px-2 py-1 rounded-md transition-colors"
          type="button"
        >
          {title}
        </button>

        <button 
          onClick={handleNext} 
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors bg-white shadow-sm border border-slate-100"
          type="button"
        >
          <ChevronRight className="w-4 h-4 text-slate-600" />
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);
    const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    return (
      <>
        {/* Weekdays */}
        <div className="grid grid-cols-7 gap-1 mb-2 text-center">
          {weekDays.map((day) => (
            <span key={day} className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              {day}
            </span>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-y-1 gap-x-1 text-center mb-6">
          {emptyDays.map((_, idx) => (
            <div key={`empty-${idx}`} />
          ))}
          {days.map((day) => {
            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
            const isSelected = selectedDate && isSameDay(date, selectedDate);
            
            return (
              <button
                key={day}
                type="button"
                onClick={() => handleDateClick(day)}
                className={`w-9 h-9 mx-auto flex items-center justify-center rounded-lg text-sm transition-all
                  ${isSelected 
                    ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-500/30" 
                    : "text-slate-700 hover:bg-slate-100 font-medium"
                  }
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </>
    );
  };

  const renderMonths = () => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    return (
      <div className="grid grid-cols-3 gap-2 mb-6">
        {months.map((month, idx) => {
          const isSelected = currentMonth.getMonth() === idx;
          return (
            <button
              key={month}
              type="button"
              onClick={() => handleMonthClick(idx)}
              className={`h-12 flex items-center justify-center rounded-lg text-sm transition-all
                ${isSelected 
                  ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-500/30" 
                  : "text-slate-700 hover:bg-slate-100 font-medium"
                }
              `}
            >
              {month}
            </button>
          );
        })}
      </div>
    );
  };

  const renderYears = () => {
    const years = Array.from({ length: 12 }, (_, i) => decadeStart - 1 + i); // showing 12 years

    return (
      <div className="grid grid-cols-3 gap-2 mb-6">
        {years.map((year) => {
          const isSelected = currentMonth.getFullYear() === year;
          return (
            <button
              key={year}
              type="button"
              onClick={() => handleYearClick(year)}
              className={`h-12 flex items-center justify-center rounded-lg text-sm transition-all
                ${isSelected 
                  ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-500/30" 
                  : "text-slate-700 hover:bg-slate-100 font-medium"
                }
              `}
            >
              {year}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="p-4 bg-white rounded-2xl w-full sm:w-[320px] shadow-sm">
      {renderHeader()}
      {view === "days" && renderDays()}
      {view === "months" && renderMonths()}
      {view === "years" && renderYears()}

      {/* Footer Buttons */}
      <div className="flex gap-3 mt-2 pt-4 border-t border-slate-100">
        <Button 
          type="button" 
          variant="outline" 
          className="flex-1 rounded-xl h-11 border-slate-200 text-slate-600 font-semibold"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button 
          type="button" 
          className="flex-1 rounded-xl h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          onClick={onOk}
        >
          OK
        </Button>
      </div>
    </div>
  );
}
