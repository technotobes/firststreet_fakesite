export default function Guide() {
    return (
        <div className="guideContainer">
            <div className="guide">
                <h2>Ready to have your cake and eat it too?</h2>
                <p>State by designing the experience you have in mind. We'll guide you
                    through each step. If your experience meets the quality standards,
                    you'll hear more about what's next.
                </p>
            </div>
            <style jsx>
                {`  
                    .guideContainer {
                        display: flex;
                        justify-content: center;
                        margin: 40px;
                    }
                    .guide {
                        text-align: center;
                        width: 50%;
                        
                    }

                    .guide p {
                        color: #88939e
                    }

                `}
            </style>
        </div>
    )
}