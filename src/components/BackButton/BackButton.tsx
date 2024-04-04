"use client";

import { useRouter } from "next/navigation";

import cn from "@/utils/cn";

import { ImArrowLeft } from "react-icons/im";
import Link from "@/components/Link"

interface BackButtonProps {
  href?: string;
  text?: string;
}

const BackButton = ({ href, text }: BackButtonProps) => {
  const router = useRouter();
  text = text || "Back";

  const className =
    "dark:text-purple-400 flex gap-2 w-max hover:gap-3 items-center transition-all duration-200 font-medium cursor-pointer text-pink-800 text-xs mx-6 font-pixel"

  return (
    <div className={cn("w-fit")}>
      {href ? (
        <Link href={href} className={cn(className)}>
          <ImArrowLeft size={18} />
          <span>{text}</span>
        </Link>
      ) : (
        <div
          className={cn(className)}
          onClick={() => router.back()}
          onKeyUp={() => router.back()}
        >
          <ImArrowLeft size={18} />
          <span>{text}</span>
        </div>
      )}
    </div>
  );
};

export default BackButton;
