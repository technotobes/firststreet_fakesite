import Logo from '../public/assets/logo.png'
import Image from 'next/dist/client/image'
import cattoblush from '../public/assets/cattoblush.png'
import Link from 'next/dist/client/link'
import SideBar from '../parts/SideBar'

export default function Navbar() {
    return (
        <>
            <div className='burger'>
                <SideBar/>
            </div>
            <nav>
                <Link href="/">
                    <Image src={Logo} alt="Logo" layout='fixed'/>
                </Link>
                <div className="navLinks">
                    <Link href='#'><a>Account</a></Link>
                    <Link href='/help'><a>Help</a></Link>
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
                        padding: 0px 150px;
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
                    .navLinks > a {
                        margin-left: 70px;
                        text-decoration: none;
                        color: #88939E;
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

                    @media (min-width: 1281px) {
                        .burger {
                            display: none;
                        }
                    }

                    @media (min-width: 300px) and (max-width: 1280px) {
  
                        .navLinks > a {
                            display: none;
                        }

                        nav {
                           padding-left: 40px;
                        }

                    }


                `}
            </style>
        </>
    )
  }