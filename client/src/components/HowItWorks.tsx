import { Calendar, CheckCircle, Truck, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Select Package",
    description: "Choose the perfect foam party package for your event size and budget"
  },
  {
    icon: CheckCircle,
    title: "Choose Date",
    description: "Pick your preferred date and time slot for the ultimate foam experience"
  },
  {
    icon: Truck,
    title: "Confirm Details",
    description: "Provide your event details and we'll handle all the logistics"
  },
  {
    icon: PartyPopper,
    title: "Party Time!",
    description: "We arrive, set up, and you enjoy the most epic foam party ever"
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-card py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to the most amazing foam party experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center" data-testid={`step-${index}`}>
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 font-['Poppins']">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
