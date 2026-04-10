import Image from "next/image";

const galleryLayout = [
  {
    id: "img-1",
    src: "/images/gallery/GalleryImg1.png",
    alt: "Security team standing on a red carpet event entrance",
    className: "md:col-span-3 md:row-span-1",
    imageClassName: "object-center",
  },
  {
    id: "img-2",
    src: "/images/gallery/GalleryImg2.png",
    alt: "Security team in front of an event backdrop",
    className: "md:col-span-3 md:row-span-1",
    imageClassName: "object-center",
  },
  {
    id: "img-3",
    src: "/images/gallery/GalleryImg3.png",
    alt: "Ceremonial guard portrait in full uniform",
    className: "md:col-span-2 md:row-span-2",
    imageClassName: "object-center md:object-top",
  },
  {
    id: "img-4",
    src: "/images/gallery/GalleryImg4.png",
    alt: "Security personnel lined up in front of storefront names",
    className: "md:col-span-2 md:row-span-1",
    imageClassName: "object-center",
  },
  {
    id: "img-5",
    src: "/images/gallery/GalleryImg5.png",
    alt: "Security team and guests at an outdoor location",
    className: "md:col-span-2 md:row-span-1",
    imageClassName: "object-center",
  },
  {
    id: "img-6",
    src: "/images/gallery/GalleryImg6.png",
    alt: "Security staff with hosts at an indoor celebration",
    className: "md:col-span-4 md:row-span-1",
    imageClassName: "object-center",
  },
  {
    id: "img-7",
    src: "/images/gallery/GalleryImg7.png",
    alt: "Traditional welcoming team with security staff",
    className: "md:col-span-4 md:row-span-1",
    imageClassName: "object-center",
  },
  {
    id: "img-8",
    src: "/images/gallery/GalleryImg8.png",
    alt: "Security team at a facility entrance",
    className: "md:col-span-2 md:row-span-1",
    imageClassName: "object-center",
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
                className={`object-cover transition-transform duration-300 group-hover:scale-[1.02] ${item.imageClassName}`}
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
