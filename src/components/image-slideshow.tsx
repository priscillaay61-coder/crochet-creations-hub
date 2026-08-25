import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type ImageSlideshowProps = {
  images: string[];
  alt: string;
  className?: string;
  interval?: number;
};

export function ImageSlideshow({ images, alt, className, interval = 3200 }: ImageSlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="relative h-full w-full">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          aria-hidden={i === 0 ? undefined : true}
          loading="lazy"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
            i === index ? "opacity-100" : "opacity-0",
            className,
          )}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((src, i) => (
            <span
              key={src}
              className={cn(
                "h-1.5 w-1.5 rounded-full bg-background transition-opacity",
                i === index ? "opacity-100" : "opacity-40",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
