export default function Hero() {
    return (
        <>
            <div className="hero-image">
                <div className="hero-container">
                    <h1>The world's greatest fake site</h1>
                    <p>Create the world's greatest fake site and enjoy
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
                        margin: 0px;
                       
                    }

                    .hero-container > p {
                            color: #fff;
                    }
                `}
            </style>
        </>
    )
  }