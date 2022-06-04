import { useState } from "react";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      style={{
        width: "60%",
        marginBottom: "15px",
        lineHeight: "15px",
        border: "1px solid rgba(209, 213, 219, 0.5)"
      }}
    >
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "4px",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer"
        }}
        onClick={toggle}
        type="button"
      >
          <div className="title">
            <p>{props.title}</p>
            {isShowing ? <p>-</p> : <p>+</p>}
          </div>
      </button>
      <div
        style={{ display: isShowing ? "block" : "none", padding: "5px" }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
      <style jsx>
          {`
            .title {
                display: flex;
                justify-content: space-between;
                margin: 0px 25px;
            }

          `}
      </style>
    </div>
  );
}
