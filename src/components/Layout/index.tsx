import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section className="d-flex">
      <nav className="layout__gnb bg-light-gray">
        <button>logout</button>
      </nav>
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
