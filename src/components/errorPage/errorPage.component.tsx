import Link from "next/link";
import Image from "next/image";
export const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-shrink-0 justify-center">
        <Link href="/dashboard" className="inline-flex">
          <span className="sr-only">Entertainment App </span>
          <Image
            className="h-12 w-auto"
            src="/logo.svg"
            height="48"
            width="48"
            alt=""
          />
        </Link>
      </div>
      <div className="py-16">
        <div className="text-center">
          <p className="text-base font-semibold text-red">404</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found.
          </h1>
          <p className="mt-2 text-base text-gray-500">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-6">
            <Link
              href="/dashboard"
              className="text-base font-medium text-red hover:text-red/75"
            >
              Go back to the Dashboard
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
