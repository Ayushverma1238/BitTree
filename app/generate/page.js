"use client";
// export const dynamic = "force-dynamic";

import Navbar from "@/components/Navbar";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Generate = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState("");

  useEffect(() => {
    const h = searchParams.get("handle");
    if (h) sethandle(h);
  }, [searchParams]);

  const [picture, setpicture] = useState("");
  const [desc, setdesc] = useState("");

  const addLinks = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links: links,
      handle: handle,
      pic: picture,
      desc: desc,
    });
    console.log(raw);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const r = await fetch("/api/add", requestOptions);

      if (!r.ok) {
        throw new Error("Something went wrong");
      }

      const result = await r.json();

      if (result.success) {
        toast.success(result.message);
        setLinks([]);
        setpicture("");
        setdesc("");
        sethandle("");
        router.push(`/${handle}`);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Server Error! Please try again.");
    }
  };

  const handleChange = (i, field, value) => {
    setLinks((prev) =>
      prev.map((item, index) =>
        index === i ? { ...item, [field]: value } : item,
      ),
    );
  };

  const handleClick = () => {
    router.push(`/${handle}`);
  };

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="bg-green bg-purple-300 pb-30 min-h-screen  grid grid-cols-2 ">
        <div className="col1 w-[60%] mt-35 mx-auto gap-5 overflow-y-auto justify-center item flex flex-col gap-3s-center text-gray-900">
          <h1 className="text-4xl font-bold">Create your BitTree</h1>
          <div className="flex flex-col gap-5">
            <div className="item flex flex-col gap-3">
              <h1 className="text-2xl font-bold">Step 1: Claim your Handle</h1>
              <div className="mx-4">
                <input
                  value={handle || ""}
                  onChange={(e) => {
                    sethandle(e.target.value);
                  }}
                  className="px-4 py-3 focus:outline-white w-full text-white bg-gray-900 rounded-2xl"
                  type="text"
                  placeholder="Choose a Handle"
                />
              </div>
            </div>
            <div className="item flex flex-col gap-3">
              <h1 className="text-2xl font-bold">Step 1: Add Links</h1>
              {links &&
                links.map((item, index) => {
                  return (
                    <div key={index} className="mx-4 flex w-[95%] gap-5">
                      <input
                        value={item.linktext || ""}
                        onChange={(e) =>
                          handleChange(index, "linktext", e.target.value)
                        }
                        className="px-4 py-3 focus:outline-white w-full text-white bg-gray-900 rounded-2xl"
                        type="text"
                        name="text"
                        placeholder="Enter Link text"
                      />
                      <input
                        value={item.link || ""}
                        onChange={(e) =>
                          handleChange(index, "link", e.target.value)
                        }
                        className="px-4 py-3 focus:outline-white w-full text-white bg-gray-900 rounded-2xl"
                        type="text"
                        name="link"
                        placeholder="Enter Link"
                      />
                    </div>
                  );
                })}

              <button
                onClick={() => {
                  addLinks();
                }}
                className="px-4 w-[80%] mx-auto py-3 rounded-full bg-linear-to-r from-slate-500 to-slate-900 hover:from-slate-900 hover:to-slate-500 cursor-pointer text-white font-bold"
              >
                Add Link
              </button>
            </div>
            <div className="item flex flex-col gap-3">
              <div className="mx-4 flex flex-col gap-3">
                <h1 className="text-2xl font-bold">
                  Step 1: Add Profile Picture and Description
                </h1>
                <input
                  value={picture || ""}
                  onChange={(e) => {
                    setpicture(e.target.value);
                  }}
                  className="px-4 py-3 focus:outline-white w-full text-white bg-gray-900 rounded-2xl"
                  type="text"
                  placeholder="Enter link to your Picture"
                />
                <input
                  value={desc || ""}
                  onChange={(e) => {
                    setdesc(e.target.value);
                  }}
                  className="px-4 py-3 focus:outline-white w-full text-white bg-gray-900 rounded-2xl"
                  type="text"
                  placeholder="Enter Description"
                />
                <button
                  disabled={
                    picture.trim() === "" ||
                    handle.trim() === "" ||
                    !links.every(
                      (item) =>
                        item.link.trim() !== "" && item.linktext.trim() !== "",
                    )
                  }
                  onClick={() => {
                    submitLinks();
                  }}
                  className="disabled:from-slate-200 disabled:to-slate-400 disabled:text-black disabled:cursor-not-allowed px-4 w-[80%] mx-auto py-3 rounded-full bg-linear-to-r from-slate-500 to-slate-900 hover:from-slate-900 hover:to-slate-500 cursor-pointer text-white font-bold"
                >
                  Add Profile
                </button>

                <button
                  onClick={handleClick}
                  className="disabled:from-slate-200 disabled:to-slate-400 disabled:text-black disabled:cursor-not-allowed px-4 w-[80%] mx-auto py-3 rounded-full bg-linear-to-r from-slate-500 to-slate-900 hover:from-slate-900 hover:to-slate-500 cursor-pointer text-white font-bold"
                >
                  Go to Your Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block fixed top-0 right-0 w-[40%] h-screen">
          <img
            src="/signup.webp"
            className="w-full h-full object-cover"
            alt="Login Page"
          />
        </div>
      </div>
    </div>
  );
};

export default Generate;
