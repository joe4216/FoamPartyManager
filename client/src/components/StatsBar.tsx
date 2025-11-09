import { Trophy, Shield, Truck, Users } from "lucide-react";

const stats = [
  { icon: Trophy, label: "500+ Parties", value: "Successfully Hosted" },
  { icon: Shield, label: "100% Foam Guarantee", value: "Quality Assured" },
  { icon: Truck, label: "Same-Day Delivery", value: "Quick Setup" },
  { icon: Users, label: "All Ages Welcome", value: "Family Friendly" },
];

export default function StatsBar() {
  return (
    <div className="bg-card border-y py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-bold text-xl mb-1">{stat.label}</div>
                <div className="text-muted-foreground">{stat.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
