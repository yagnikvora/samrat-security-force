import Image from "next/image";

import galleryImg1 from "@/public/images/gallery/GalleryImg1.png";
import galleryImg2 from "@/public/images/gallery/GalleryImg2.png";
import galleryImg3 from "@/public/images/gallery/GalleryImg3.png";
import galleryImg4 from "@/public/images/gallery/GalleryImg4.png";
import galleryImg5 from "@/public/images/gallery/GalleryImg5.png";
import galleryImg6 from "@/public/images/gallery/GalleryImg6.png";
import galleryImg7 from "@/public/images/gallery/GalleryImg7.png";
import galleryImg8 from "@/public/images/gallery/GalleryImg8.png";

const galleryLayout = [
  {
    id: "img-1",
    src: galleryImg1,
    alt: "Security team standing on a red carpet event entrance",
    className: "md:col-span-3 md:row-span-1",
    imageClassName: "object-cover object-center",
  },
  {
    id: "img-2",
    src: galleryImg2,
    alt: "Security team in front of an event backdrop",
    className: "md:col-span-3 md:row-span-1",
    imageClassName: "object-cover object-center",
  },
  {
    id: "img-3",
    src: galleryImg3,
    alt: "Ceremonial guard portrait in full uniform",
    className: "row-span-2 md:col-span-2 md:row-span-2",
    imageClassName: "gallery-img3",
  },
  {
    id: "img-4",
    src: galleryImg4,
    alt: "Security personnel lined up in front of storefront names",
    className: "md:col-span-2 md:row-span-1",
    imageClassName: "object-cover object-center",
  },
  {
    id: "img-5",
    src: galleryImg5,
    alt: "Security team and guests at an outdoor location",
    className: "md:col-span-2 md:row-span-1",
    imageClassName: "object-cover object-center",
  },
  {
    id: "img-6",
    src: galleryImg6,
    alt: "Security staff with hosts at an indoor celebration",
    className: "md:col-span-4 md:row-span-1",
    imageClassName: "object-cover object-center",
  },
  {
    id: "img-7",
    src: galleryImg7,
    alt: "Traditional welcoming team with security staff",
    className: "md:col-span-4 md:row-span-1",
    imageClassName: "object-cover object-center",
  },
  {
    id: "img-8",
    src: galleryImg8,
    alt: "Security team at a facility entrance",
    className: "md:col-span-2 md:row-span-1",
    imageClassName: "object-cover object-center",
  },
] as const;

export function GalleryGridSection() {
  return (
    <div className="bg-primary -mb-10">
      <section className="mx-auto max-w-[900px] bg-primary pt-10 pb-25 px-4">
        <div className="grid auto-rows-[210px] grid-cols-1 gap-5 sm:auto-rows-[230px] sm:grid-cols-2 md:grid-cols-6 md:auto-rows-[245px]">
          {galleryLayout.map((item) => (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.34)] ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={`transition-transform duration-300 group-hover:scale-[1.02] ${item.imageClassName}`}
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                priority={item.id === "img-1" || item.id === "img-2"}
              />
            </article>
          ))}
        </div>
      </section>
    </div>

  );
}
