import BookingCalendar from "@/components/BookingCalendar";

export default function CalendarView() {
  const mockBookings = [
    {
      id: "1",
      customerName: "Sarah Johnson",
      packageType: "Standard Party",
      eventDate: new Date().toISOString().split('T')[0],
      eventTime: "2:00 PM",
      status: "confirmed" as const,
      partySize: 45,
      email: "sarah@example.com",
      phone: "(555) 123-4567",
      address: "123 Main St",
      notes: ""
    },
    {
      id: "2",
      customerName: "Mike Stevens",
      packageType: "Premium Party",
      eventDate: new Date().toISOString().split('T')[0],
      eventTime: "6:00 PM",
      status: "pending" as const,
      partySize: 80,
      email: "mike@example.com",
      phone: "(555) 987-6543",
      address: "456 Oak Ave",
      notes: ""
    },
    {
      id: "3",
      customerName: "Emily Rodriguez",
      packageType: "Basic Party",
      eventDate: (() => {
        const date = new Date();
        date.setDate(date.getDate() + 5);
        return date.toISOString().split('T')[0];
      })(),
      eventTime: "12:00 PM",
      status: "confirmed" as const,
      partySize: 25,
      email: "emily@example.com",
      phone: "(555) 456-7890",
      address: "789 Pine Rd",
      notes: ""
    }
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-['Poppins'] mb-2">Calendar View</h1>
        <p className="text-muted-foreground">Manage your bookings by date</p>
      </div>

      <BookingCalendar bookings={mockBookings} />
    </div>
  );
}
