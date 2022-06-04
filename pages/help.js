import { GiSpellBook } from 'react-icons/gi'
import { RiQuestionnaireLine } from 'react-icons/ri'
import { FaHandsHelping } from 'react-icons/fa'
import { IoSearchCircleSharp } from 'react-icons/io5'

import Accordion from '../parts/accordion'

export default function Help() {
    return (
      <>

        <main>
          <div className="mainContainer">
              <h1>How can we help you?</h1>
                 
              <form className="questionForm">
                <div className="inputBorder">
                  <input placeholder="Ask a question" type="text">
                  </input>
                  <button type="submit"><IoSearchCircleSharp size="3em" color='#EE2D1C'/></button>
                </div>
              </form>
              <h2>Or choose an option that best fits your needs.</h2>
            <div className="iconsContainer">
              <a href="#" className="iconBox">
                <GiSpellBook size="6em" color='#EE2D1C'/>
                <h2>Guides</h2>
                <p>Learn about the key requirements, 
                  responsibilities, and skills that will 
                  help you build your fake site</p>
              </a>
              <a href="#" className="iconBox">
                <RiQuestionnaireLine size="6em" color='#EE2D1C'/>
                <h2>FAQ</h2>
                <p>Frequently Asked Questions</p>
              </a>
              <a href="#" className="iconBox">
                <FaHandsHelping size="6em" color='#EE2D1C'/>
                <h2>Community</h2>
                <p>Hot topics from a community forum</p>
                </a>
            </div>
            <h2>Getting Started</h2>
            <p>A walkthrough of technical instructions to begin your fake site designs</p>
            <div className="accordianContainer">
              {/* <div className="accBox"><Accordion title="Click Me!" content="this is content 1"/></div>
              <div className="accBox"><Accordion title="Click Me!" content="this is content 1"/></div>
              <div className="accBox"><Accordion title="Click Me!" content="this is content 1"/></div> */}
              <Accordion title="Click Me!" content="this is content 1"/>
              <Accordion title="Click Me!" content="this is content 1"/>
              <Accordion title="Click Me!" content="this is content 1"/>
            </div>
            
          </div>
          <style jsx>
                  {`


                      .mainContainer {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 100%;
                        padding-left: 90px;
                        padding-right: 90px;
                        padding-top: 140px;
                        text-align: center;
                      }

                      .iconsContainer {
                        display: flex;
                        background-color: #FFF(255, 255, 255, 0.198);
                        justify-content: center;
                        margin: 20px 0px;
                      }

                      .iconBox {
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        align-items: center;
                        width: 430px;
                        border: 1px solid #d0d0d0;
                        margin: 0px 40px;
                        padding: 50px;
                        text-decoration: none;
                      }

                      .iconBox:hover {
                        background-color: #ee2e1c1f;
                      }

                      .iconBox > h2,p {
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
                        border: 1px solid #88939E;
                        border-radius: 30px;
                        width: 30%;
                      }

                      .accordianContainer{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                      }
                    
                      .accBox {
                        display: flex;
                        justify-content: center;
                      }

                      button {
                        border:none;
                        background-color:#FFF;
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

                      p {
                        font-size: 22px;
                        color: #88939E;
                      }
                  `}
              </style>
        </main>
      </>
    )
  }