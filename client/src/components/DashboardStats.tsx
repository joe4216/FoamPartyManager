import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Calendar, TrendingUp, Users } from "lucide-react";

interface StatsProps {
  totalBookings: number;
  upcomingEvents: number;
  totalRevenue: number;
  totalGuests: number;
}

export default function DashboardStats({ totalBookings, upcomingEvents, totalRevenue, totalGuests }: StatsProps) {
  const stats = [
    {
      title: "Total Bookings",
      value: totalBookings.toString(),
      icon: Calendar,
      description: "All time bookings"
    },
    {
      title: "Upcoming Events",
      value: upcomingEvents.toString(),
      icon: TrendingUp,
      description: "Next 30 days"
    },
    {
      title: "Total Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      description: "This month"
    },
    {
      title: "Total Guests",
      value: totalGuests.toLocaleString(),
      icon: Users,
      description: "Served this year"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} data-testid={`stat-card-${index}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
