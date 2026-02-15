import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute left-[5%] top-5 w-[95%] mx-auto flex justify-centre z-50">
      <div className="bg-white/80 backdrop-blur-md w-[95%] rounded-full gap-7 shadow-md px-8 py-4 flex items-center justify-between mt-6">
        <div className="flex gap-20 items-center">
          <Link href="/">
            <img
              className="w-25"
              src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
              alt="Website"
            />
          </Link>

          {/* Menu */}
          <ul className="flex gap-10 font-medium">
            <li>
              <Link className="text-sm" href="/">Product</Link>
            </li>
            <li>
              <Link className="text-sm" href="/">Templates</Link>
            </li>
            <li>
              <Link className="text-sm" href="/">Marketplace</Link>
            </li>
            <li>
              <Link className="text-sm" href="/">Learn</Link>
            </li>
            <li>
              <Link className="text-sm" href="/">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-3 justify-between items-center">
          {/* Button */}
          <button className="px-5 font-bold py-4 rounded-xl bg-slate-200 "><Link href={"/login"}>LogIn</Link></button>
          <button className="px-6 font-bold py-4 rounded-full bg-black text-white"><Link href={"/signup"}>Sign up free</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
