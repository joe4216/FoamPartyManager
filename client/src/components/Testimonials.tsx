import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import testimonialWoman from "@assets/generated_images/Customer_testimonial_woman_5cb86961.png";
import testimonialMan from "@assets/generated_images/Customer_testimonial_man_d973f2e4.png";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: testimonialWoman,
    initials: "SJ",
    event: "Birthday Party",
    rating: 5,
    text: "Best birthday party ever! The kids are still talking about it weeks later. Professional setup and the foam was amazing!"
  },
  {
    name: "Mike Stevens",
    image: testimonialMan,
    initials: "MS",
    event: "Corporate Event",
    rating: 5,
    text: "We hired Foam Works Party Co for our company summer party and it was a huge hit! Everyone had an absolute blast."
  },
  {
    name: "Emily Rodriguez",
    image: testimonialWoman,
    initials: "ER",
    event: "Graduation Party",
    rating: 5,
    text: "The team was incredibly professional and the foam party made our graduation celebration unforgettable. Highly recommend!"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-card py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from happy party hosts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate" data-testid={`testimonial-${index}`}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.event}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
