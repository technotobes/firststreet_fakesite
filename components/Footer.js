import Logo from '../public/assets/logo.png'
import Image from 'next/dist/client/image'

export default function Footer() {
    return (
        <footer>
            <div className="footerTopContainer">
                <div className="footerCol">
                    <span>Fakesite</span>
                    <a href='#'>About us</a>
                    <a href='#'>Press</a>
                    <a href='#'>Policies</a>
                    <a href='#'>Help</a>
                </div>
                <div className="footerCol">
                    <span>Account</span>
                    <a href='#'>Edit Profile</a>
                    <a href='#'>Friends</a>
                    <a href='#'>Social</a>
                    <a href='#'>Delete Profile</a>

                </div>

            </div>
            <div className="footerBotContainer">
                <hr />
                <div className="footerBot">
                    <div>
                        <a href='#'>
                            <span className="profilePic">
                                <Image src={Logo} alt="Profile"/>
                            </span>
                        </a>
                    </div>
                    <div className="footerBotLinks">
                        <a href='#'>Terms</a>
                        <a href='#'>Privacy</a>
                        <a href='#'>Site Map</a>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    footer {
                        display: flex;
                        flex-direction: column;
                    }

                    .footerTopContainer {
                        display: flex;
                        flex-direction: row;
                    }

                    .footerCol {
                        display: flex;
                        flex-direction: column;
                        margin-left: 100px;
                        margin-bottom: 80px;
                    }

                    .footerCol span {
                        font-size: 22px;
                        color: #EE2D1C;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }

                    .footerBotContainer {
                        display: flex;
                        flex-direction: column;
                    }

                    .footerBot {
                        display: flex;
                        justify-content: space-between;
                        z-index: 99;
                        bottom: 0px;
                        width: 100%;
                        height: 120px;
                        align-items: center;
                        padding: 0px 90px;
                    }

                    .footerBotLinks {
                        display: flex;
                    }

                    .footerBotLinks a {
                        align-items: center;
                        margin-left: 70px;
                        font-size: 22px;
                    }

                    a {
                        text-decoration: none;
                        color: #88939E;
                        font-size: 22px;
                    }

                    a:hover {
                        color: #4c4c51;
                        font-size: 22px;
                        line-height: 28px;
                    }

                `}
            </style>
        </footer>
    )
  }