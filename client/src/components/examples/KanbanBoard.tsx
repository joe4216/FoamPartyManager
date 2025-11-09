import KanbanBoard from '../KanbanBoard'

export default function KanbanBoardExample() {
  const mockBookings = [
    {
      id: "1",
      customerName: "Sarah Johnson",
      packageType: "Standard Party",
      eventDate: "2024-12-15",
      eventTime: "2:00 PM",
      status: "pending" as const,
      partySize: 45,
      email: "sarah@example.com",
      phone: "(555) 123-4567"
    },
    {
      id: "2",
      customerName: "Mike Stevens",
      packageType: "Premium Party",
      eventDate: "2024-12-20",
      eventTime: "6:00 PM",
      status: "confirmed" as const,
      partySize: 80,
      email: "mike@example.com",
      phone: "(555) 987-6543"
    },
    {
      id: "3",
      customerName: "Emily Rodriguez",
      packageType: "Basic Party",
      eventDate: "2024-12-10",
      eventTime: "12:00 PM",
      status: "completed" as const,
      partySize: 25,
      email: "emily@example.com",
      phone: "(555) 456-7890"
    }
  ];

  return (
    <div className="p-8">
      <KanbanBoard bookings={mockBookings} />
    </div>
  )
}
