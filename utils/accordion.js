import { useState } from "react";

export default function Accordion(props) {
	const [isShowing, setIsShowing] = useState(false);

	const toggle = () => {
		setIsShowing(!isShowing);
	};

	return (
		<div className='accDiv'>
			<button
				className='accButt'
				onClick={toggle}
				type='button'
			>
				<div className='titleContainer'>
					<p className='titleText'>{props.title}</p>
					{isShowing ? <p className="openClose">-</p> : <p className="openClose">+</p>}
				</div>
			</button>
      {isShowing ? <p className="showing">{props.content}</p> : null}
			<style jsx>
				{`
            .accDiv {
              width: 100%;
              margin: 25px 0px;
              lineHeight: 15px;
              border: 1px solid rgba(209, 213, 219, 0.5);
              text-align: start;
            }

            .accButt {
              width: 100%;
              position: relative;
              padding: 4px;
              border: none;
              background: transparent;
              outline: none;
              cursor: pointer;
            }

            .titleContainer {
                display: flex;
                justify-content: space-between;
                margin: 25px 25px;
            }

            .titleText {
              font-weight: bold;
            }

            .openClose {
              font-size: 30px;
              font-weight: bold;
            }

            .showing {
              display: flex;
              padding: 0px 40px 30px 30px;
              color:#88939E;
              
            }

            p {
              margin: 0;
              color: #EE2D1C;
              
            }

            @media (min-width: 300px) and (max-width: 768px){

              .titleText {
                font-size: 14px;
              }

              .openClose {
                font-size: 14px;
                font-weight: bold;
              }

            }

          `}
			</style>
		</div>
	);
}
