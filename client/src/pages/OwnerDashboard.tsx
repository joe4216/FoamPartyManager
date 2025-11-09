import DashboardStats from "@/components/DashboardStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OwnerDashboard() {
  const recentBookings = [
    {
      id: "1",
      customerName: "Sarah Johnson",
      packageType: "Standard Party",
      eventDate: "2024-12-15",
      status: "confirmed" as const,
      revenue: 299
    },
    {
      id: "2",
      customerName: "Mike Stevens",
      packageType: "Premium Party",
      eventDate: "2024-12-20",
      status: "pending" as const,
      revenue: 499
    },
    {
      id: "3",
      customerName: "Emily Rodriguez",
      packageType: "Basic Party",
      eventDate: "2024-12-18",
      status: "confirmed" as const,
      revenue: 199
    },
  ];

  const statusVariants = {
    pending: "secondary",
    confirmed: "default",
    completed: "outline",
  };

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-['Poppins'] mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your foam party business</p>
      </div>

      <DashboardStats
        totalBookings={127}
        upcomingEvents={8}
        totalRevenue={12450}
        totalGuests={3240}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-['Poppins']">Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover-elevate"
                  data-testid={`recent-booking-${booking.id}`}
                >
                  <div className="flex-1">
                    <div className="font-semibold mb-1">{booking.customerName}</div>
                    <div className="text-sm text-muted-foreground">
                      {booking.packageType} - {booking.eventDate}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-bold text-primary">${booking.revenue}</div>
                    </div>
                    <Badge variant={statusVariants[booking.status] as any}>
                      {booking.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-['Poppins']">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button
                className="w-full p-4 text-left border rounded-lg hover-elevate"
                onClick={() => console.log('View calendar')}
                data-testid="button-quick-calendar"
              >
                <div className="font-semibold mb-1">View Calendar</div>
                <div className="text-sm text-muted-foreground">Check upcoming events</div>
              </button>
              
              <button
                className="w-full p-4 text-left border rounded-lg hover-elevate"
                onClick={() => console.log('Manage bookings')}
                data-testid="button-quick-kanban"
              >
                <div className="font-semibold mb-1">Manage Bookings</div>
                <div className="text-sm text-muted-foreground">Update booking status</div>
              </button>
              
              <button
                className="w-full p-4 text-left border rounded-lg hover-elevate"
                onClick={() => console.log('Generate report')}
                data-testid="button-quick-report"
              >
                <div className="font-semibold mb-1">Generate Report</div>
                <div className="text-sm text-muted-foreground">View revenue analytics</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
