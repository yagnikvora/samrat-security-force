import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="page-container py-20 text-center sm:py-28">
      <p className="text-6xl font-semibold text-white">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
        Oops! <span className="text-brand">Page Not Found</span>
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-slate-300">
        We could not find the page you were looking for. It may have been moved or removed.
      </p>
      <Link
        href="/"
        className="cta-pill mt-8 inline-flex items-center gap-2 rounded-full ps-5 pe-1.5 py-1.5 text-[15px] font-medium"
      >
        <span>Back To Home</span>
        <span className="cta-pill-icon inline-flex size-8 items-center justify-center rounded-full">
          <Image
            src="/svgs/common/cta-arrow-up-right.svg"
            alt="Arrow"
            width={16}
            height={16}
            className="cta-pill-arrow h-4 w-4"
          />
        </span>
      </Link>
    </div>
  );
}
