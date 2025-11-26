// 🟦 BUTTON — Arena Cartoon Edition
// -------------------------------------------------------
// A highly reusable, fully theme-able Button component.
// Features:
// - variants: primary | secondary | danger | ghost
// - sizes: sm | md | lg
// - fullWidth support
// - disabled state
// - className override
// - optimized Tailwind classes
//
// Arena Cartoon Theme Notes:
// - Uses thick borders
// - High contrast colors
// - Chunky hover animations
// - Slight "bounce" interaction

import React from "react";
import clsx from "clsx";

const variants = {
  primary:
    "bg-yellow-400 text-gray-900 border-4 border-yellow-500 hover:bg-yellow-300",
  secondary:
    "bg-blue-400 text-white border-4 border-blue-600 hover:bg-blue-300",
  danger: "bg-red-500 text-white border-4 border-red-700 hover:bg-red-400",
  ghost: "bg-white text-gray-800 border-4 border-gray-300 hover:bg-gray-100",
};

const sizes = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "rounded-xl font-bold select-none transition-all",
        "active:scale-[0.97]",
        "shadow-[0_4px_0_#0003]", // cartoon drop shadow
        disabled && "opacity-50 pointer-events-none",

        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
