import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900/50 backdrop-blur-sm">
      {/* <!-- Spinner --> */}
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>
      {/* <!-- Text Label --> */}
      <p className="mt-4 text-sm font-medium text-gray-200 animate-pulse">
        Loading resources...
      </p>
    </div>
  );
}
