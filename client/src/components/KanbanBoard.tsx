import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Users, DollarSign } from "lucide-react";

interface Booking {
  id: string;
  customerName: string;
  packageType: string;
  eventDate: string;
  eventTime: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  partySize: number;
  email: string;
  phone: string;
}

interface KanbanBoardProps {
  bookings: Booking[];
  onStatusChange?: (bookingId: string, newStatus: string) => void;
}

const columns = [
  { id: "pending", title: "Pending Requests", color: "border-yellow-500" },
  { id: "confirmed", title: "Confirmed", color: "border-green-500" },
  { id: "completed", title: "Completed", color: "border-blue-500" },
];

const packagePrices: Record<string, string> = {
  "Basic Party": "$199",
  "Standard Party": "$299",
  "Premium Party": "$499",
};

export default function KanbanBoard({ bookings, onStatusChange }: KanbanBoardProps) {
  const getBookingsByStatus = (status: string) => {
    return bookings.filter((booking) => booking.status === status);
  };

  const handleCardClick = (booking: Booking) => {
    console.log('Booking details:', booking);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {columns.map((column) => {
        const columnBookings = getBookingsByStatus(column.id);
        
        return (
          <Card key={column.id} className={`border-l-4 ${column.color}`}>
            <CardHeader className="pb-4">
              <CardTitle className="font-['Poppins'] flex items-center justify-between">
                {column.title}
                <Badge variant="secondary">{columnBookings.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[calc(100vh-250px)]">
                <div className="space-y-3 p-6 pt-0">
                  {columnBookings.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No bookings</p>
                  ) : (
                    columnBookings.map((booking) => (
                      <Card
                        key={booking.id}
                        className="hover-elevate cursor-pointer"
                        onClick={() => handleCardClick(booking)}
                        data-testid={`kanban-card-${booking.id}`}
                      >
                        <CardContent className="p-4">
                          <div className="font-semibold mb-2">{booking.customerName}</div>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{booking.eventDate} at {booking.eventTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              <span>{booking.partySize} guests</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4" />
                              <span className="font-semibold text-foreground">
                                {packagePrices[booking.packageType]}
                              </span>
                            </div>
                          </div>
                          <Badge variant="outline" className="mt-3">
                            {booking.packageType}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
