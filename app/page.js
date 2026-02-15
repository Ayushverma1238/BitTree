"use client";
import HomepageRive from "@/components/HomepageRive";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [text, settext] = useState("");

  const createTree = () => {
    let link = `/generate/?handle=${text}`;
    router.push(link);
  };
  return (
    <>
      <Navbar />
      <div className="gap-10 bg-[#d2e823]">
        <div className="h-200  w-[90%] mx-auto  flex justify-center gap-10 items-center">
          <div className="left text-[#254f1a] space-y-3 w-1/2">
            <h1 className=" text-5xl font-bold">
              A link in bio built for you.
            </h1>
            <p>
              Join 70M+ people using Linktree for their link in bio. One link to
              help you share everything you create, curate and sell from your
              Instagram, TikTok, Twitter, YouTube and other social media
              profiles.
            </p>
            <div className="flex gap-10 mx-5">
              <input
                value={text}
                onChange={(e) => settext(e.target.value)}
                className="w-full bg-white rounded-lg ring px-5 py-4"
                type="text"
                placeholder="Enter your handle"
              />
              <button
                onClick={createTree}
                className="bg-[#254f1a] w-full cursor-pointer text-white font-bold px-5 py-4 rounded-full"
              >
                Get Started for Free
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <video
              id="customize-your-linktree"
              autoPlay
              playsInline
              loop
              muted
              className="max-width:100%;width:100%; height:auto; max-height: 100%; border-radius:1rem"
              poster="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/692eb9b488731835c528bb18_capture_1764669836574.webp"
            >
              <source
                src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.webm"
                type="video/webm"
              />
              <source src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.mp4" />
            </video>
          </div>
        </div>

        {/* <div className="h-0.5 bg-gray-900"></div> */}

        <div className="pb-4">
          <div className="bg-blue-500">
            <div className="flex w-[90%] mx-auto py-14 justify-center items-center gap-20">
              <div>
                <video
                  id="customize-your-linktree"
                  autoPlay
                  playsInline
                  loop
                  muted
                  className="max-width:100%;width:100%; height:auto; max-height: 100%; border-radius:1rem"
                  poster="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/692eb9b488731835c528bb18_capture_1764669836574.webp"
                >
                  <source
                    src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.webm"
                    type="video/webm"
                  />
                  <source src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.mp4" />
                </video>
              </div>
              <div className="flex gap-10 flex-col">
                <div>
                  <h1 className="text-4xl font-bold text-[#d2e823]">
                    Create and customize your Linktree in minutes
                  </h1>
                  <p className="text-gray-200 mt-3">
                    Connect all your content across social media, websites,
                    stores and more in one link in bio. Customize every detail
                    or let Linktree automatically enhance it to match your brand
                    and drive more clicks.
                  </p>
                </div>
                <button className="px-4 w-1/2 font-bold py-3 rounded-full bg-[#d2e823] ring-1">
                  Get Started for Free
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#780016]">
            <div className="flex w-[90%] mx-auto py-14 justify-center items-center gap-20">
              <div className="flex w-[40%] gap-10 flex-col">
                <div>
                  <h1 className="text-4xl font-bold text-[#d2e823]">
                    Create and customize your Linktree in minutes
                  </h1>
                  <p className="text-gray-200 mt-3">
                    Connect all your content across social media, websites,
                    stores and more in one link in bio. Customize every detail
                    or let Linktree automatically enhance it to match your brand
                    and drive more clicks.
                  </p>
                </div>
                <button
                  onClick={() => createTree}
                  className="px-4 w-1/2 font-bold py-3 rounded-full bg-[#d2e823] ring-1"
                >
                  Get Started for Free
                </button>
              </div>
              <div className="w-[60%]">
                <HomepageRive />
              </div>
            </div>
          </div>
          <div className="bg-[#e8efd6]">
            <div className="flex w-[90%] mx-auto py-14 justify-center items-center gap-20">
              <div>
                <img
                  src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/68b80693934ab0ccd4bf7482_home-section-4.avif"
                  alt="Analyze your audience and keep them engaged"
                />
              </div>
              <div className="flex gap-10 flex-col">
                <div>
                  <h1 className="text-4xl font-bold ">
                    Create and customize your Linktree in minutes
                  </h1>
                  <p className=" mt-3">
                    Connect all your content across social media, websites,
                    stores and more in one link in bio. Customize every detail
                    or let Linktree automatically enhance it to match your brand
                    and drive more clicks.
                  </p>
                </div>
                <button className="px-4 w-1/2 font-bold py-3 rounded-full bg-[#e9c0e9] ring-1">
                  Get Started for Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
