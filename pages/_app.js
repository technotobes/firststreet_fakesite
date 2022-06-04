import { BaseLayout, WhiteLayout } from "../components/Layouts";


function MyApp({ Component, pageProps, router }) {

  if (router.pathname.startsWith('/help')) {
    return (
      <div>
        <WhiteLayout>
          <Component {...pageProps} />
        </WhiteLayout>
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

            {/* Hamburger Menu Styles */}
            .bm-burger-bars {
            background-color: red;
            }

            /* Position and sizing of burger button */
            .bm-burger-button {
              position: fixed;
              width: 36px;
              height: 30px;
              top: 40px;
              right: 40px;
            }

            /* Color/shape of burger icon bars */
            .bm-burger-bars {
              background: #4c4c51;
            }

            /* Color/shape of burger icon bars on hover*/
            .bm-burger-bars-hover {
              background: #ee2d1c;
            }

            /* Position and sizing of clickable cross button */
            .bm-cross-button {
              height: 40px !important;
              width: 40px !important;
              right: 10px !important;
            }

            /* Color/shape of close button cross */
            .bm-cross {
              background: #FFF;
              height: 30px !important;
              right: 10px !important;
            }

            /*
            Sidebar wrapper styles
            Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
            */
            .bm-menu-wrap {
              position: fixed;
              height: 100%;
            }

            /* General sidebar styles */
            .bm-menu {
              background: #4c4c51;
              padding: 2.5em 1.5em 0;
              font-size: 1.15em;
            }

            /* Wrapper for item list */
            .bm-item-list {
              color: #b8b7ad;
              padding: 0.8em;
            }

            /* Individual item */
            .bm-item {
              display: inline-block;
              text-decoration: none;
              color: #FFF;
            }

            /* Styling of overlay */
            .bm-overlay {
              height: 100%;
              width: 100%;
              background: rgba(0, 0, 0, 0.3);
            }

          `}
        </style>
      </div>

    )
  } 

  return (
    <div>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>


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

          {/* Hamburger Menu Styles */}
          .bm-burger-bars {
          background-color: red;
          }

          /* Position and sizing of burger button */
          .bm-burger-button {
            position: fixed;
            width: 36px;
            height: 30px;
            top: 40px;
            right: 40px;
          }

          /* Color/shape of burger icon bars */
          .bm-burger-bars {
            background: #4c4c51;
          }

          /* Color/shape of burger icon bars on hover*/
          .bm-burger-bars-hover {
            background: #ee2d1c;
          }

          /* Position and sizing of clickable cross button */
          .bm-cross-button {
            height: 40px !important;
            width: 40px !important;
            right: 10px !important;
          }

          /* Color/shape of close button cross */
          .bm-cross {
            background: #FFF;
            height: 30px !important;
            right: 10px !important;
          }

          /*
          Sidebar wrapper styles
          Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
          */
          .bm-menu-wrap {
            position: fixed;
            height: 100%;
          }

          /* General sidebar styles */
          .bm-menu {
            background: #4c4c51;
            padding: 2.5em 1.5em 0;
            font-size: 1.15em;
          }

          /* Wrapper for item list */
          .bm-item-list {
            color: #b8b7ad;
            padding: 0.8em;
          }

          /* Individual item */
          .bm-item {
            display: inline-block;
            text-decoration: none;
            color: #FFF;
          }

          /* Styling of overlay */
          .bm-overlay {
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.3);
          }

        `}
      </style>
    </div>
  );
}

export default MyApp;
