// 🟥 CARD — Arena Cartoon Edition
// -------------------------------------------------------
// Super-flexible container with:
// - padding variants: sm | md | lg
// - shadow variants
// - hover animation toggle
// - border and background themed for cartoon look
//
// Arena Cartoon Theme Notes:
// - fat borders
// - sunny highlights
// - chunky shadows
// - slight hover-lift option

import React from "react";
import clsx from "clsx";

export default function Card({
  children,
  shadow = "md", // none | sm | md | lg
  padding = "md", // sm | md | lg
  hover = false,
  className = "",
  ...props
}) {
  const shadowStrength = {
    none: "shadow-none",
    sm: "shadow-[0_4px_0_#0003]",
    md: "shadow-[0_6px_0_#0004]",
    lg: "shadow-[0_8px_0_#0005]",
  };

  const paddingClass = {
    sm: "p-2",
    md: "p-4",
    lg: "p-6",
  };

  return (
    <div
      className={clsx(
        "rounded-2xl bg-white border-4 border-gray-300",
        shadowStrength[shadow],
        paddingClass[padding],
        hover &&
          "hover:-translate-y-1 hover:shadow-[0_12px_0_#0004] transition-all",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
