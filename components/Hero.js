export default function Hero() {
    return (
        <>
            <div className="hero-image">
                <div className="hero-container">
                    <h1>The world&apos;s greatest fake site</h1>
                    <p>Create the world&apos;s greatest fake site and enjoy
                    <br/>
                    the breeze of fresh air when you complete it</p>
                    <button className="hero-button">Do something awesome</button>
                </div>
            </div>
            <style jsx>
                {`
                    .hero-image {
                        background-image: url("assets/hero-image.png");
                        text-align: center;
                        height: 100vh;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        position: relative;
                    }

                    .hero-container {
                        color: #fff;
                        text-align: center;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 100%;
                       
                    }

                    .hero-container > p {
                            color: #fff;
                    }


                    @media (min-width: 300px) and (max-width: 768px){
                        
                        h1 {
                            font-size: 36px;
                        }

                        p {
                            font-size: 20px;
                        }

                    }
                `}
            </style>
        </>
    )
  }