// 🟩 INPUT — Arena Cartoon Edition
// -------------------------------------------------------
// A clean, fully reusable input field.
// Features:
// - optional label
// - error state
// - fullWidth
// - className override
//
// Arena Cartoon Theme Notes:
// - bold borders
// - smooth focus ring
// - chunkier padding

import React from "react";
import clsx from "clsx";

export default function Input({
  label,
  error,
  fullWidth = true,
  className = "",
  ...props
}) {
  return (
    <div className={clsx(fullWidth && "w-full")}>
      {label && (
        <label className="block mb-1 font-bold text-gray-900 drop-shadow-sm">
          {label}
        </label>
      )}

      <input
        className={clsx(
          "px-4 py-2 rounded-xl border-4",
          "bg-white text-gray-800",
          "transition-all outline-none",
          "focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500",
          "border-gray-300",
          error && "border-red-500 focus:ring-red-300 focus:border-red-600",
          className
        )}
        {...props}
      />

      {error && (
        <p className="mt-1 text-sm font-semibold text-red-600">{error}</p>
      )}
    </div>
  );
}
