import React from "react";
import Navbar from "@app/(components)/Navbar"; // Adjust based on actual path
import Sidebar from "@app/(components)/Sidebar";


const dashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* sidebar */}
      <Sidebar/>
      {/* main is the right side of the page. */}
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64`}
      >
        {/* this includes our right side (basically the navbar and the content ) */}
        {/* navbar  */}
        <Navbar />
        {children} //this will include our content
      </main>
    </div>
  );
};

export default dashboardWrapper;
