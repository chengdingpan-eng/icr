"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt?: string };

interface CarouselProps {
  images: Slide[];
  interval?: number;
}

export default function Carousel({ images, interval = 4000 }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | undefined>(undefined);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = undefined;
    }
  }, []);

  const start = useCallback(() => {
    stop();
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
  }, [interval, images.length, stop]);

  useEffect(() => {
    start();
    return () => stop();
  }, [start, stop]);

  return (
    <section className="w-full">
      <div
        className="relative w-full h-[400px] md:h-[500px] overflow-hidden"
        onMouseEnter={stop}
        onMouseLeave={start}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt ?? ""}
              fill
              className="object-cover object-contain"
            />
          </div>
        ))}

        {/* 轮播指示点：统一使用品牌蓝色 */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-8 rounded-full transition-colors ${
                i === index ? "bg-brand-blue" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
