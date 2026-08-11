import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

const EVENTS = [
  { start: new Date(2025, 4, 22), end: new Date(2025, 5, 4), title: "End of Term Examinations" }, // May 22 - June 4
  { start: new Date(2025, 5, 7), end: new Date(2025, 5, 7), title: "AGM" }, // June 7
  { start: new Date(2025, 5, 21), end: new Date(2025, 5, 21), title: "Academic Clinic" }, // June 21
];

const getEventsForDate = (date) => {
  return EVENTS.filter(event => {
    const checkDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const startDate = new Date(event.start.getFullYear(), event.start.getMonth(), event.start.getDate());
    const endDate = new Date(event.end.getFullYear(), event.end.getMonth(), event.end.getDate());
    return checkDate >= startDate && checkDate <= endDate;
  });
};

const CalendarModal = ({ isOpen, onClose }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 1)); // Default to May 2025 to show events

  if (!isOpen) return null;

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const shortDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const days = [];
  // Empty slots before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="bg-slate-50 min-h-[80px] sm:min-h-[120px]"></div>);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), d);
    const dateEvents = getEventsForDate(date);
    
    // Check if it's today
    const today = new Date();
    const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();

    days.push(
      <div 
        key={d} 
        className={`bg-white p-2 sm:p-3 min-h-[80px] sm:min-h-[120px] flex flex-col transition-colors hover:bg-slate-50 overflow-hidden
          ${isToday ? 'ring-2 ring-inset ring-forest/30 bg-forest/5' : ''}
        `}
      >
        <span className={`text-sm sm:text-base font-semibold mb-1 ${isToday ? 'text-forest' : 'text-slate-700'}`}>
          {d}
        </span>
        <div className="flex flex-col gap-1 mt-1 overflow-y-auto custom-scrollbar">
          {dateEvents.map((event, idx) => (
            <div 
              key={idx} 
              className="bg-forest text-white text-[10px] sm:text-xs px-2 py-1 rounded truncate w-full shadow-sm"
              title={event.title}
            >
              {event.title}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-forest text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <CalendarIcon size={20} />
            <h3 className="font-sans font-bold tracking-widest text-sm uppercase">School Calendar</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4 sm:p-6 lg:p-8 flex-1 overflow-y-auto flex flex-col bg-slate-50">
          {/* Calendar Controls */}
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl sm:text-2xl font-bold text-slate-800">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h4>
            <div className="flex gap-2">
              <button onClick={prevMonth} className="p-2 sm:px-4 sm:py-2 rounded-full sm:rounded-lg border border-slate-200 hover:bg-white bg-white sm:bg-transparent text-slate-600 transition-colors flex items-center gap-1 shadow-sm sm:shadow-none">
                <ChevronLeft size={18} />
                <span className="hidden sm:inline text-sm font-semibold">Prev</span>
              </button>
              <button onClick={nextMonth} className="p-2 sm:px-4 sm:py-2 rounded-full sm:rounded-lg border border-slate-200 hover:bg-white bg-white sm:bg-transparent text-slate-600 transition-colors flex items-center gap-1 shadow-sm sm:shadow-none">
                <span className="hidden sm:inline text-sm font-semibold">Next</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex-1 flex flex-col relative">
            <div className="overflow-x-auto flex-1 custom-scrollbar">
              <div className="min-w-[700px] flex flex-col h-full">
                {/* Days Header */}
                <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50 shrink-0">
                  {dayNames.map((day, idx) => (
                    <div key={day} className="text-center py-3 border-r border-slate-200 last:border-r-0">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{day}</span>
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 bg-slate-200 gap-px flex-1">
                  {days}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
