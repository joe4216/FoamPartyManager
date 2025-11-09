import DashboardStats from '../DashboardStats'

export default function DashboardStatsExample() {
  return (
    <div className="p-8">
      <DashboardStats
        totalBookings={127}
        upcomingEvents={8}
        totalRevenue={12450}
        totalGuests={3240}
      />
    </div>
  )
}
