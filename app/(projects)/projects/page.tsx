import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <section className="h-full space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex h-full max-w-[64rem] flex-col items-center justify-center text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Overview of projects to come
          </h1>
          <p className="max-w-[42rem] py-4 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            distinctio dolor magni nam nobis pariatur possimus quod suscipit,
            tempora voluptas! Alias deserunt enim excepturi ipsam, iste pariatur
            placeat provident sunt!
          </p>
        </div>
      </section>
    </>
  );
}
