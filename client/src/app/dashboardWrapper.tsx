import React from "react";
import Navbar from "@app/(components)/Navbar"; // Adjust based on actual path
import Sidebar from "@app/(components)/Sidebar";
import StoreProvider from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* sidebar */}
      <Sidebar />
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
//this is how we use context providers.
const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
// : It manages the global state of your application, ensuring that any component within the DashboardLayout can access the Redux store. Also This keeps the Redux-related logic separate from the UI components, making it easier to manage the application’s state.
  return (
    <StoreProvider>
      {/* check redux.tsx now our entire application has access to redux */}
      <DashboardLayout>{children}</DashboardLayout> 
      {/*  It wraps around the DashboardLayout component, ensuring that all components within this layout have access to the global Redux store. */}
    </StoreProvider>
  );
};

export default DashboardLayout;
