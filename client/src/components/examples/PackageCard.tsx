import PackageCard from '../PackageCard'
import standardMachine from "@assets/generated_images/Standard_foam_machine_product_f9aab1ce.png";

export default function PackageCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <PackageCard
        title="Standard Party"
        price="$299"
        duration="3 hours"
        image={standardMachine}
        features={[
          "Professional foam machine",
          "Up to 500 gallons of foam",
          "Setup and breakdown included",
          "Foam solution provided"
        ]}
        capacity="Up to 50 people"
        popular={true}
        onBook={() => console.log('Book Standard Party')}
      />
    </div>
  )
}
