import React from "react";
import Topbar from "components/topbar/Topbar";
import Sidebar from "components/sidebar/Sidebar";
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
      </div>
    </>
  );
}
