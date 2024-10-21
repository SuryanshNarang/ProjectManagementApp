"use client"
// In your example with useEffect, you need to control the dark mode of the application based on the state of isDarkMode. This involves manipulating the DOM, which can only be done on the client side:
mport React, { useEffect } from "react";
import Navbar from "@app/(components)/Navbar"; // Adjust based on actual path
import Sidebar from "@app/(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // using global states:
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
// remember the root of the layout exists in the layout.tsx so there's no way of controlling without using "use Client" component 
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  });
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
