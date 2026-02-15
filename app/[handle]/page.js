// "use client"
import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

// import { useRouter } from "next/navigation";

export default async function page({ params }) {
  const handle = (await params).handle;
  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("links");

  const items = await collection.findOne({ handle: handle });
  if (!items) {
    return notFound();
  }

  //   const items = {
  //     _id: {
  //       $oid: "69917f531d702f6d76ca37fa",
  //     },
  //     links: [
  //       {
  //         link: "https://www.instagram.com/ayushverma1238/",
  //         linktext: "Instagram",
  //       },
  //       {
  //         link: "https://youtube.com",
  //         linktext: "YourTube",
  //       },
  //       {
  //         link: "https://linkedin/ayushverma",
  //         linktext: "Linkedin",
  //       },
  //       {
  //         link: "https://github.com/ayushverma1238",
  //         linktext: "Github",
  //       },
  //     ],
  //     handle: "ayush",
  //     pic: "https://avatars.githubusercontent.com/u/179673484?s=400&v=4",
  //   };

  return (
    <>
    {/* <Navbar/> */}
      <div className="flex min-h-screen bg-linear-to-r from-gray-400 to-slate-800 justify-center">
        <div className="photo flex items-center gap-4 py-10 flex-col">
          <img height={100} width={100} src={items.pic} alt="No image" />
          <span className="font-bold text-gray-900 text-xl">@{items.handle}</span>
          <span className="max-w-70 text-center text-gray-200">
            {items.desc}
          </span>
          <div className="links">
            {items.links.map((item, index) => {
              return (
                <Link key={index} href={item.link} >
                  <div className="py-4 cursor-pointer transition-all duration-200 flex justify-center px-3 bg-slate-900 shadow-lg shadow-white hover:bg-slate-800 font-bold text-white min-w-100 hover:scale-105 rounded-md my-4">
  {item.linktext}
                  </div>
                </Link>
              );
            })}

          </div>
          <Link
                href = {`/generate/?handle=${items.handle}`}
                  className=" px-4 w-[80%] mx-auto py-3 rounded-full bg-linear-to-r from-purple-500 to-pink-700 hover:from-purple-900 hover:to-pink-800 cursor-pointer text-white text-center font-bold"
                >
                  Add More Link
                </Link>
        </div>
      </div>
    </>
  );
}
