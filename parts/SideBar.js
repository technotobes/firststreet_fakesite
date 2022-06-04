import React from "react";
import { slide as Menu } from "react-burger-menu";
import Image from "next/image";
import cattoblush from "../public/assets/cattoblush.png"


export default props => {
  return (
    <Menu right {...props} className="menu" >
      <a href='#'>
          <span className="profilePic">
              <Image src={cattoblush} alt="Profile"/>
          </span>
      </a>
        <a className="menu-item" href="#">
          Account
        </a>
        <a className="menu-item" href="#">
          Help
        </a>
      <style jsx>
        {`
          .profilePic {
              display:flex;
              border-radius: 50%;
              width: 75px;
              height: 75px;
              border: 3px solid #FFF;
              z-index: 99;
              overflow: hidden;
              margin-bottom: 40px;

            }

            .menu-item {
              margin-bottom: 20px;
              color: #FFF;
              font-size: 25px;
              margin-left: 5px;
            }

            .menu-item:hover {
              color: #88939E
            }
        `}
      </style>
    </Menu>
  );
};