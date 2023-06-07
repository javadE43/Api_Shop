import React, { ReactNode, useContext, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import contextSidebar from "../context/menu_sidebar";

interface DefaultLayoutProps {
  children: ReactNode;
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const context = useContext(contextSidebar);

  return (
    <div className="relative h-screen">
      {/* page wraper start */}
      <div className={`flex flex-row h-[100%] w-[100%] min-h-[100%] min-w-[100%]`}>
        {/* sidebar start */}
        <Sidebar />
        {/* sidebar end */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div
          className={`${
            context.open
              ? "home__sidebar__open home__sidebar__open__sm home__sidebar__open__md home__sidebar__open__lg home__sidebar__open__xl"
              : "home__sidebar__close home__sidebar__close__sm home__sidebar__close__md home__sidebar__close__lg home__sidebar__close__xl"
          }`}
        >
          {/* header start */}
          <Header />
          {/* header end */}

          {/* main content start */}
          <main>
            <div>{children}</div>
          </main>
          {/* main content end */}
        </div>
        {/* <!-- ===== Content Area end ===== --> */}
      </div>
      {/* page wraper start end*/}
    </div>
  );
};

export default DefaultLayout;
