"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type HeadingProps = {
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export default function Heading({
  title,
  description,
  align = "center",
}: HeadingProps) {
  return (
    <div className={clsx("space-y-3", `text-${align}`)}>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-sm text-neutral-600 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
