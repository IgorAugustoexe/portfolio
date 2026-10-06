"use client";

import type { PropsWithChildren } from "react";
import { Heading } from "./SectionHeading.styles";

export function SectionHeading({ id, children }: PropsWithChildren<{ id: string }>) {
  return <Heading id={id}>{children}</Heading>;
}
