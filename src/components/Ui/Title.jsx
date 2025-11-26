// 🟨 TITLE — Arena Cartoon Edition
// -------------------------------------------------------
// A stylish heading component with:
// - level (1–4)
// - align
// - font weight
// - color overrides
// - ultra cartoon-friendly styling
//
// Arena Cartoon Theme Notes:
// - bold chunky font sizes
// - slight stroke-like shadow for cartoon vibe
// - optional alignment and sizes

import React from "react";
import clsx from "clsx";

export default function Title({
  children,
  level = 1,
  align = "center",
  weight = "bold",
  color = "text-gray-900",
  className = "",
}) {
  const Tag = `h${level}`;

  const sizes = {
    1: "text-5xl",
    2: "text-4xl",
    3: "text-3xl",
    4: "text-2xl",
  };

  return (
    <Tag
      className={clsx(
        sizes[level],
        `font-${weight}`,
        color,
        `text-${align}`,
        "drop-shadow-[2px_2px_0_#0002]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
