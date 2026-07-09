import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div class="flex h-screen flex-col bg-white pt-16 pb-12 dark:bg-gray-900">
      <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
        <div class="text-center">
          {/* <!-- Error Code --> */}
          <p class="text-base font-semibold text-indigo-600 dark:text-indigo-400">
            404
          </p>

          {/* <!-- Heading --> */}
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Page not found
          </h1>

          {/* <!-- Description --> */}
          <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved or deleted.
          </p>

          {/* <!-- Action Buttons --> */}
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
            >
              Go back home
            </Link>
            <Link
              to = "/about"
              class="text-sm font-semibold text-gray-900 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              About Application <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
