"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/utils/cn";

import { CiCircleChevLeft } from "react-icons/ci";
import Link from "next/link";

interface BackButtonProps {
  href?: string;
  text?: string;
}

const BackButton = ({ href, text }: BackButtonProps) => {
  const router = useRouter();
  text = text || "Back";

  const className =
    "flex gap-2 w-max hover:gap-3 items-center transition-all duration-200 font-medium cursor-pointer";

  return (
    <div className={cn("w-fit")}>
      {href ? (
        <Link href={href} className={cn(className)}>
          <CiCircleChevLeft size={20} />
          <span>{text}</span>
        </Link>
      ) : (
        <div
          className={cn(className)}
          onClick={() => router.back()}
          onKeyUp={() => router.back()}
        >
          <CiCircleChevLeft size={20} />
          <span>{text}</span>
        </div>
      )}
    </div>
  );
};

export default BackButton;
