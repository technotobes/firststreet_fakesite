import Logo from '../public/assets/logo.png'
import Image from 'next/dist/client/image'
import cattoblush from '../public/assets/cattoblush.png'

export default function Navbar() {
    return (
        <>
            <nav>
                <a href="#">
                    <Image src={Logo} />
                </a>
                <div className="navLinks">
                    <a href='#'>Account</a>
                    <a href='#'>Help</a>
                    <a href='#'>
                        <span className="profilePic">
                            <Image src={cattoblush} alt="Profile"/>
                        </span>
                    </a>
                </div>
            </nav>
            
            <style jsx>
                {`
                    nav {
                        display: flex;
                        justify-content: space-between;
                        position: absolute;
                        z-index: 99;
                        top: 0px;
                        width: 100%;
                        height: 120px;
                        align-items: center;
                        padding: 0px 90px;
                        
                        
                    }

                    nav a:hover {
                        color: #4c4c51;
                        font-size: 22px;
                        position: relative;
                    }

                    nav>a:hover {
                        top: 1px;
                    }

                    .navLinks {
                        display: flex;
                        align-items: center;

                    }
                    .navLinks a {
                        margin-left: 70px;
                        text-decoration: none;
                        color: #FFF;
                        font-size: 22px;
                    }


                    .profilePic {
                        display:flex;
                        border-radius: 50%;
                        width: 50px;
                        height: 50px;
                        border: 3px solid #FFF;
                        z-index: 99;
                        overflow: hidden;

                    }


                `}
            </style>
        </>
    )
  }