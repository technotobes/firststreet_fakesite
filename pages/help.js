import { GiSpellBook } from "react-icons/gi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";

import Accordion from "../parts/accordion";

export default function Help() {
  return (
    <>
      <main>
        <div className="mainContainer">
          <h1>How can we help you?</h1>
          <form className="questionForm">
            <div className="inputBorder">
              <input placeholder="Ask a question" type="text"></input>
              <button type="submit">
                <IoSearchCircleSharp size="3em" color="#EE2D1C" />
              </button>
            </div>
          </form>
          <p>Or choose an option that best fits your needs</p>
          <div className="iconsContainer">
            <a href="#" className="iconBox">
              <GiSpellBook size="6em" color="#EE2D1C" />
              <h2>Guides</h2>
              <p>
                Learn about the key requirements, responsibilities, and skills
                that will help you build your fake site
              </p>
            </a>
            <a href="#" className="iconBox">
              <RiQuestionnaireLine size="6em" color="#EE2D1C" />
              <h2>FAQ</h2>
              <p>Frequently Asked Questions</p>
            </a>
            <a href="#" className="iconBox">
              <FaHandsHelping size="6em" color="#EE2D1C" />
              <h2>Community</h2>
              <p>Hot topics from a community forum</p>
            </a>
          </div>
          <div className="startedText">
            <h2>Getting Started</h2>
            <p>
              A walkthrough of technical instructions to begin your fake site
              designs
            </p>
          </div>
          <div className="accordianContainer">
            <Accordion title="General Walkthrough" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <Accordion title="Initialization Guide" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <Accordion title="Additional Options and Services" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </div>
        </div>
        <style jsx>
          {`
            .mainContainer {
              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 100%;
              padding: 0px 150px;
              padding-top: 150px;
              text-align: center;
            }

            .iconsContainer {
              display: flex;
              background-color: #FFF(255, 255, 255, 0.198);
              justify-content: space-between;
              width: 100%;
              margin: 20px 0px;
              margin-bottom: 80px;
            }

            .iconBox {
              display: flex;
              flex-direction: column;
              text-align: center;
              align-items: center;
              width: 430px;
              border: 1px solid #e8e8e8;
              padding: 60px;
              text-decoration: none;
            }

            .iconBox:hover {
              background-color: #e8e8e8;
            }

            .iconBox > h2, p {
              margin-bottom: 0;
            }

            .questionForm {
              display: flex;
              justify-content: center;
              margin: 50px 0px;
            }

            .inputBorder {
              display: flex;
              justify-content: space-between;
              border: 1px solid #e8e8e8;
              border-radius: 30px;
              width: 45%;
            }

            .accordianContainer {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 40px;
              width: 100%;
            }

            .accBox {
              display: flex;
              justify-content: center;
            }

            .startedText {
              margin-bottom: 40px;
            }

            button {
              border: none;
              background-color: #fff;
              align-self: center;
              border-radius: 30px;
            }

            input {
              height: 45px;
              width: 85%;
              border: none;
              border-radius: 30px;
              padding-left: 20px;
              outline-style: none;
              line-height: 28px;
              font-size: 22px;
            }

            h1 {
              color: #4c4c51;
            }

            h3 {
              color: #4c4c51;
              font-size: 25px;
            }

            p {
              font-size: 22px;
              color: #88939e;
            }
          `}
        </style>
      </main>
    </>
  );
}
