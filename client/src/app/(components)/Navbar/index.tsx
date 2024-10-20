import React from "react";
import { Search, Settings } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black dark:px-4 dark:py-3">
      {/* searchbar */}
      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[200px]">
          {" "}
          {/* //search container */}
          <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none"
            placeholder="Search...."
          />
        </div>
      </div>

      {/* dealing with icons on the rightside  */}
      <div className="flex items-center">
        <Link
          href="/settings"
          className="h-min w-min rounded p-2 hover:bg-gray-100"
        >
          <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
        </Link>
        {/* below line tells that larger than medium screens we are gonna set this to be inline block we have vertical line only when its larger then medium screens.  */}
        <div className="min-h-2[em] ml-2 mr-5 hidden w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Navbar;
