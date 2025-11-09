import PackageCard from "./PackageCard";
import basicMachine from "@assets/generated_images/Basic_foam_machine_product_f6d438fa.png";
import standardMachine from "@assets/generated_images/Standard_foam_machine_product_f9aab1ce.png";
import premiumMachine from "@assets/generated_images/Premium_foam_machine_product_bea56ba2.png";

interface FeaturedPackagesProps {
  onBookClick: (packageType: string) => void;
}

export default function FeaturedPackages({ onBookClick }: FeaturedPackagesProps) {
  const packages = [
    {
      title: "Basic Party",
      price: "$199",
      duration: "2 hours",
      image: basicMachine,
      features: [
        "Compact foam machine",
        "Up to 300 gallons of foam",
        "Perfect for small gatherings",
        "Foam solution included"
      ],
      capacity: "Up to 25 people"
    },
    {
      title: "Standard Party",
      price: "$299",
      duration: "3 hours",
      image: standardMachine,
      features: [
        "Professional foam machine",
        "Up to 500 gallons of foam",
        "Setup and breakdown included",
        "Foam solution provided",
        "Party music playlist"
      ],
      capacity: "Up to 50 people",
      popular: true
    },
    {
      title: "Premium Party",
      price: "$499",
      duration: "4 hours",
      image: premiumMachine,
      features: [
        "Industrial foam cannon",
        "Unlimited foam",
        "Full event coordination",
        "LED party lights included",
        "Professional DJ setup",
        "Photo booth service"
      ],
      capacity: "Up to 100 people"
    }
  ];

  return (
    <div id="packages-section" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4">
            Choose Your Package
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate gatherings to massive celebrations, we have the perfect foam solution for your event
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.title}
              {...pkg}
              onBook={() => onBookClick(pkg.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
