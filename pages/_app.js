import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <style jsx global>
        {`
          @font-face {
            font-family: "SourceSansPro";
            src: url("fonts/SourceSansPro-Regular.otf") format("opentype");
          }

          * {
            box-sizing: border-box;
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


          hr {
            border: 1px solid #E8E8E8;
            margin: 0px 90px;
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
