import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";

import SearchIcon from "@mui/icons-material/Search";
import CottageIcon from "@mui/icons-material/Cottage";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt=""
        />

        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={CottageIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://i.guim.co.uk/img/media/c98894eead818e269e09f5bbcfeb82e2ab12939c/0_0_6000_3600/master/6000.jpg?width=465&quality=85&fit=max&s=daadf25b64269683be51772a5443b8d3"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
