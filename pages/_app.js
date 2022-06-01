function MyApp({ Component, pageProps }) {
  return (
    <div className="layout">
      <Component {...pageProps} />

      <style jsx global>
        {`
          @font-face {
            font-family: "SourceSansPro";
            src: url("fonts/SourceSansPro-Regular.otf") format("opentype");
          }

          main {
            font-family: "SourceSansPro";
          }

          footer {
            font-family: "SourceSansPro";
          }

          body {
            font-family: "SourceSansPro";
            margin: 0px;
            box-sizing: border-box;
          }

          .hero-button {
            background-color: #ee2d1c;
            color: #fff;
            font-size: 22px;
            min-height: 55px;
            align-text: center;
            border: none;
            border-radius: 50px;
            padding: 0px 30px;
            margin: 22px;
          }

          button:hover {
            opacity: 0.7;
            cursor: pointer;
          }

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

          h1,
          h2 {
            margin: 22px
          }

          h1 {
            color: #fff;
            font-size: 48px;
            line-height: 48px;
          }

          h2 {
            color: #4c4c51;
            font-size: 36px;
            line-height: 36px;
          }

          p {
            color: #4c4c51;
            font-size: 22px;
            line-height: 28px;
          }

          a,
          a:active,
          a:inactive {
            color: #88939e;
            font-size: 22px;
            line-height: 28px;
          }

          a:hover {
            color: #4c4c51;
            font-size: 22px;
            line-height: 28px;
          }
        `}
      </style>
    </div>
  );
}

export default MyApp;
