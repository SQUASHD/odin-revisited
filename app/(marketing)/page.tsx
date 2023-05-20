import { OdinRevisitedText } from "@/assets/icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-full space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex h-full max-w-[64rem] flex-col items-center justify-center text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Revisiting a fullstack curriculum from start to finish
          </h1>
          <p className="max-w-[42rem] py-4 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I&apos;m redoing the Odin Project&apos;s fullstack curriculum from
            start to finish, and I&apos;m going to be documenting the process
            here.
          </p>
        </div>
      </section>
      {/*<section*/}
      {/*  id="features"*/}
      {/*  className="h-full space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32"*/}
      {/*></section>*/}
    </>
  );
}
