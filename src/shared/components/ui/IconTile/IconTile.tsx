"use client";

import { AppIcon, type AppIconName } from "@/shared/components/ui/AppIcon/AppIcon";
import Image, { type StaticImageData } from "next/image";
import { Tile } from "./IconTile.styles";

type IconTileProps = {
  size?: "standard" | "large";
  className?: string;
} & (
  | { name: AppIconName; image?: never; imageSizes?: never }
  | { image: StaticImageData; name?: never; imageSizes?: string }
);

export function IconTile({ name, image, imageSizes = "44px", size = "standard", className }: IconTileProps) {
  return (
    <Tile $size={size} className={className} aria-hidden="true">
      {image ? <Image src={image} alt="" sizes={imageSizes} /> : <AppIcon name={name} />}
    </Tile>
  );
}
