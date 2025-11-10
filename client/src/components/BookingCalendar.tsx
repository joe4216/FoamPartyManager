import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, addMonths, subMonths } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { Booking } from "@shared/schema";

const statusColors = {
  pending: "bg-yellow-500",
  confirmed: "bg-green-500",
  completed: "bg-blue-500",
  cancelled: "bg-red-500",
};

const statusVariants = {
  pending: "default" as const,
  confirmed: "default" as const,
  completed: "secondary" as const,
  cancelled: "destructive" as const,
};

interface BookingCalendarProps {
  bookings: Booking[];
}

export default function BookingCalendar({ bookings }: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const startDay = monthStart.getDay();
  const paddingDays = Array(startDay).fill(null);

  const getBookingsForDate = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return bookings.filter(booking => booking.eventDate === dateStr);
  };

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold font-['Poppins']">
            {format(currentMonth, "MMMM yyyy")}
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={handlePrevMonth} data-testid="button-prev-month">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNextMonth} data-testid="button-next-month">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-semibold text-sm text-muted-foreground py-2">
              {day}
            </div>
          ))}

          {paddingDays.map((_, index) => (
            <div key={`padding-${index}`} className="min-h-[120px]" />
          ))}

          {daysInMonth.map((day) => {
            const dayBookings = getBookingsForDate(day);
            const isCurrentDay = isToday(day);

            return (
              <div
                key={day.toString()}
                className={`min-h-[120px] border rounded-lg p-2 ${
                  isCurrentDay ? "border-primary border-2" : ""
                } ${!isSameMonth(day, currentMonth) ? "opacity-50" : ""}`}
                data-testid={`calendar-day-${format(day, "yyyy-MM-dd")}`}
              >
                <div className={`text-sm font-semibold mb-1 ${isCurrentDay ? "text-primary" : ""}`}>
                  {format(day, "d")}
                </div>
                <div className="space-y-1">
                  {dayBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className={`text-xs p-1.5 rounded ${statusColors[booking.status as keyof typeof statusColors]} text-white cursor-pointer hover-elevate`}
                      title={`${booking.customerName} - ${booking.packageType} at ${booking.eventTime}`}
                      data-testid={`event-${booking.id}`}
                    >
                      <div className="font-semibold truncate">{booking.eventTime}</div>
                      <div className="truncate">{booking.customerName}</div>
                      <div className="text-[10px] truncate opacity-90">{booking.packageType}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t">
          {Object.entries(statusColors).map(([status, color]) => (
            <div key={status} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded ${color}`} />
              <span className="text-sm capitalize">{status}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
