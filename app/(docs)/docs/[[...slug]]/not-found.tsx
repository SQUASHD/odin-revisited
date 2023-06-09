"use client"; // Error components must be Client Components

import { DocsPageHeader } from "@/components/page-header";

export default function NotFound() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <DocsPageHeader
          heading={"Not Found"}
          text={"Couldn't find the doc you were looking for"}
        />
        It seems like you&apos;ve found a broken link. Sorry about that!
        <hr className="my-4 md:my-6" />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10"></div>
      </div>
    </main>
  );
}
