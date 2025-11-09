import kidsParty from "@assets/generated_images/Kids_foam_party_fun_60ac03d9.png";
import adultParty from "@assets/generated_images/Adult_foam_party_event_7eb1cc21.png";
import backyardSetup from "@assets/generated_images/Backyard_foam_party_setup_5da0cb92.png";
import largeEvent from "@assets/generated_images/Large_scale_foam_event_6078494a.png";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const galleryImages = [
  { src: kidsParty, alt: "Kids foam party" },
  { src: adultParty, alt: "Adult foam party event" },
  { src: backyardSetup, alt: "Backyard foam party setup" },
  { src: largeEvent, alt: "Large scale foam event" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4">
            See The Fun In Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real foam parties, real smiles, real unforgettable memories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button
                  className="relative aspect-square overflow-hidden rounded-lg hover-elevate group"
                  onClick={() => setSelectedImage(image.src)}
                  data-testid={`gallery-image-${index}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
