import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PackageCardProps {
  title: string;
  price: string;
  duration: string;
  image: string;
  features: string[];
  capacity: string;
  popular?: boolean;
  onBook: () => void;
}

export default function PackageCard({
  title,
  price,
  duration,
  image,
  features,
  capacity,
  popular,
  onBook
}: PackageCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate relative h-full flex flex-col" data-testid={`card-package-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {popular && (
        <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">
          Most Popular
        </Badge>
      )}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <CardHeader className="pb-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-2xl font-bold font-['Poppins']">{title}</h3>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">{price}</div>
            <div className="text-sm text-muted-foreground">{duration}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 flex-1">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{capacity}</Badge>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full min-h-11" 
          size="lg"
          onClick={onBook}
          data-testid={`button-book-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
