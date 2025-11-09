import KanbanBoard from "@/components/KanbanBoard";

export default function KanbanView() {
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
    },
    {
      id: "4",
      customerName: "John Williams",
      packageType: "Standard Party",
      eventDate: "2024-12-18",
      eventTime: "4:00 PM",
      status: "pending" as const,
      partySize: 50,
      email: "john@example.com",
      phone: "(555) 234-5678"
    },
    {
      id: "5",
      customerName: "Lisa Chen",
      packageType: "Premium Party",
      eventDate: "2024-12-22",
      eventTime: "3:00 PM",
      status: "confirmed" as const,
      partySize: 100,
      email: "lisa@example.com",
      phone: "(555) 345-6789"
    }
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-['Poppins'] mb-2">Kanban Board</h1>
        <p className="text-muted-foreground">Manage your bookings by workflow stage</p>
      </div>

      <KanbanBoard bookings={mockBookings} />
    </div>
  );
}
