import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="font-satoshi font-bold text-4xl text-primary-text mb-4">
        404
      </h1>
      <p className="font-inter text-secondary-text mb-8 text-center max-w-md">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-accent text-white font-inter font-medium hover:bg-accent/90 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
