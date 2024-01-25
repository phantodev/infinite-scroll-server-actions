"use client";

import Image from "next/image";
import { useState } from "react";
import SpinnerImageLoader from "./SpinnerImageLoader";

export default function CardBeer({
  image_url,
  name,
  tagline,
}: {
  image_url: string;
  name: string;
  tagline: string;
}) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = (e: HTMLImageElement) => {
    e.classList.remove("opacity-0");
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false);
  };

  return (
    <>
      <div className="relative group aspect-square w-full overflow-hidden rounded-lg bg-zinc-900 flex justify-center items-center font-bold">
        <Image
          src={image_url}
          alt=""
          className="w-full h-full object-contain group-hover:opacity-75 transition-opacity opacity-0 duration-1000"
          width={300}
          height={300}
          onLoad={(e) => handleImageLoad(e.target as HTMLImageElement)}
          onError={handleImageError}
        />
        {loading && (
          <div className="text-black absolute">
            <SpinnerImageLoader />
          </div>
        )}
      </div>
      <p className="mt-2 block truncate font-medium">{name}</p>
      <p className="block text-sm font-medium text-gray-500">{tagline}</p>
    </>
  );
}
