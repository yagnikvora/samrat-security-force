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
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand ps-5 pe-1.5 py-1.5 text-[15px] font-medium text-white transition hover:brightness-110"
      >
        <span>Back To Home</span>
        <span className="inline-flex size-8 items-center justify-center rounded-full bg-white/95">
          <Image src="/images/nevbar_right_arrow.png" alt="Arrow" width={30} height={30} className="h-[30px] w-[30px]" />
        </span>
      </Link>
    </div>
  );
}
