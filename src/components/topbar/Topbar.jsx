import { Search, Chat, Notifications } from "@mui/icons-material";
import React from "react";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">SNS</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searachIcon" />
          <input type="text" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIconItem">
          <Chat />
          <span className="topbarIconBudge">1</span>
        </div>

        <div className="topbarIconItem">
          <Notifications />
          <span className="topbarIconBudge">2</span>
        </div>
      </div>
      <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
    </div>
  );
}
