import Link from "next/link";

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
      <Link href="/" className="mt-8 inline-flex rounded-full bg-brand px-7 py-3 text-sm font-semibold text-black">
        Back To Home
      </Link>
    </div>
  );
}
