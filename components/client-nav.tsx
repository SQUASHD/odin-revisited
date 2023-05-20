"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";
import { MainNavItem } from "@/types";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useLockBody } from "@/hooks/use-lock-body";
import { useState } from "react";

type BreadCrumbProps = {
  rootName: string;
  rootHref: string;
  className?: string;
};
export const RootBreadCrumb = ({
  rootName,
  rootHref,
  className,
}: BreadCrumbProps) => {
  return (
    <nav className={cn("flex items-center gap-2", className)}>
      <Link href={"/"}>
        <Icons.home className="h-4" />
        <span className="sr-only">Home</span>
      </Link>
      <span>/</span>
      <Link href={rootHref}>
        <span>{rootName}</span>
      </Link>
    </nav>
  );
};

export default function DynamicBreadCrumb({
  rootHref,
  rootName,
  className,
}: BreadCrumbProps) {
  const segments = useSelectedLayoutSegments();

  const compoundedSegments = segments.map((segment, index) => {
    return decodeURI(segments.slice(0, index + 1).join("/"));
  });

  return (
    <ul
      className={cn("flex flex-wrap items-center gap-1 uppercase", className)}
    >
      <li>
        <Link href={"/"}>
          <Icons.home className="h-4" />
          <span className="sr-only">Home</span>
        </Link>
      </li>
      <span>/</span>
      <li>
        <Link href={rootHref}>
          <span>{rootName}</span>
        </Link>
      </li>
      {segments.map((segment, index) => (
        <li key={index} className="before:mx-1 before:content-['/']">
          {index < segments.length - 1 ? (
            <Link href={`${compoundedSegments[index]}`} className="">
              {decodeURI(segment).replace("-", " ")}
            </Link>
          ) : (
            <span>{decodeURI(segment).replace("-", " ")}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}
