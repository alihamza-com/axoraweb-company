"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "@/components/Common/SectionTitle";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="We are ready to help"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
            mb="80px"
          />
        </div>

        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
                <div className="relative aspect-video items-center justify-center">
                  {isPlaying ? (
                    <video
                      controls
                      autoPlay
                      className="h-full w-full rounded-md"
                    >
                      <source src="/images/video/axora.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <>
                      <Image
                        src="/images/video/image.png"
                        alt="video preview"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                        <button
                          onClick={() => setIsPlaying(true)}
                          className="text-primary flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/75 transition hover:bg-white"
                          aria-label="Play video"
                        >
                          <svg
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            className="fill-current"
                          >
                            <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                          </svg>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
        </div>
      </section>
    </>
  );
}
