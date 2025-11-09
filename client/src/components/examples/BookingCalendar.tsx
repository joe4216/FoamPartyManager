import BookingCalendar from '../BookingCalendar'

export default function BookingCalendarExample() {
  const mockBookings = [
    {
      id: "1",
      customerName: "Sarah Johnson",
      packageType: "Standard Party",
      eventDate: new Date().toISOString().split('T')[0],
      eventTime: "2:00 PM",
      status: "confirmed" as const,
      partySize: 45
    },
    {
      id: "2",
      customerName: "Mike Stevens",
      packageType: "Premium Party",
      eventDate: new Date().toISOString().split('T')[0],
      eventTime: "6:00 PM",
      status: "pending" as const,
      partySize: 80
    }
  ];

  return (
    <div className="p-8">
      <BookingCalendar bookings={mockBookings} />
    </div>
  )
}
