export const revalidate = 0;

import { getHomepage, ImageType } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import foxLogo from "../public/images/fox-logo.png";
export default async function Home() {
  const data = await getHomepage();

  const { Hero, Content, Expertises, Gallery } = data;

  return (
    <main className="no-scrollbar w-screen">
      <section
        id="section"
        className="py-6 sm:py-24 max-h-[1120px] h-screen sm:max-h-screen relative w-full justify-center flex items-center"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <Image
            src={Hero.heroImage}
            alt="Hero Background cover"
            fill
            className="w-full h-full object-cover absolute"
          />
          <div className="flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 xl:gap-0 sm:justify-between w-full relative bottom-0 h-full">
            <button className="border-2 Poppins pt-1 text-white hover:bg-white hover:text-black text-lg duration-300 border-white rounded-full px-9 py-1">
              Explore
            </button>
            <div className="flex flex-col">
              <h2 className="font-bold text-4xl leading-none Poppins text-white">
                {Hero.heading}
              </h2>
              <p className="text-white text-lg">{Hero.tagline} </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section"
        className="py-6 sm:py-24 h-fit sm:h-[50vh] sm:max-h-screen relative w-full justify-center flex items-center"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <div className="flex xl:flex-row xl:gap-64 flex-col h-full justify-center xl:items-center">
            <div className="flex flex-col h-full sm:justify-center xl:gap-12 xl:text-center">
              <p className="uppercase text-xl">Fox Design</p>
              <p>{Content.tagline}</p>
            </div>
            <div className="flex flex-col gap-3 items-start sm:gap-9 xl:w-3/4">
              <p className="text-base">{Content.excerpt}</p>
              <Link href="/works">
                <button className="border-2 hover:bg-black hover:text-white duration-300 Poppins pt-1 border-black rounded-full px-6 font-bold py-1">
                  Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section"
        className="h-fit relative w-full flex items-center justify-center"
      >
        <div
          id="container"
          className="w-[50vw] sm:w-[50vw] px-6 sm:px-24 relative opacity-75"
        >
          <Image
            src={foxLogo}
            alt=""
            width={420}
            height={420}
            className="h-full object-cover w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-[12em] leading-none Poppins tracking-tighter text-shadow">
              FoxDesign
            </h3>
          </div>
        </div>
      </section>

      <section
        id="section"
        className="h-fit sm:h-screen py-6 sm:py-24 relative w-full justify-center flex items-center"
      >
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="w-full relative mb-6 sm:mb-0">
            <button className="sm:absolute z-10 top-0 left-0 border-2 border-black rounded-full px-3 py-1 hover:bg-black hover:text-white duration-300 Poppins">
              See Our Works
            </button>
          </div>
          <div className="w-full h-full">
            <Marquee className="w-fit overflow-hidden" speed={90}>
              {(Gallery.imageUrls || []).map(
                (image: ImageType, index: number) => {
                  return (
                    <div
                      key={index}
                      className="w-[88vw] overflow-hidden shrink-0 cursor-pointer flex items-center justify-center sm:w-[450px] aspect-video"
                    >
                      <Image
                        loading="lazy"
                        src={image?.url || ""}
                        alt="Images"
                        width={200}
                        height={300}
                        className="h-full w-full object-cover px-1"
                      />
                    </div>
                  );
                }
              )}
            </Marquee>
          </div>
        </div>
      </section>
      <section
        id="section"
        className=" overflow-hidden sm:py-24 py-6 relative w-full justify-center flex items-center"
      >
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-5xl Poppins">{Expertises.heading}</h2>
          </div>
          <div className="w-full h-full gap-6 flex flex-col sm:flex-row justify-between items-center">
            {Expertises.map((expertise: any, index: number) => {
              return (
                <Link
                  key={index}
                  href="/works"
                  className="h-full w-full border-2 border-black p-6 group sm:w-1/2 flex items-center justify-center flex-col"
                >
                  <span className="text-2xl relative z-10 text-black Poppins text-shadow">
                    {expertise.heading}
                  </span>
                  <div className="h-full sm:h-[60vh] w-full overflow-hidden">
                    <Image
                      src={expertise.url}
                      alt=""
                      width={320}
                      height={320}
                      className=" group-hover:scale-105 duration-300 h-full w-full object-cover"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
