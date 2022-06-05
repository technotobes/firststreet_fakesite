export default function Guide() {
    return (
        <div className="guideContainer">
            <div className="guide">
                <h2>Ready to have your cake and eat it too?</h2>
                <p>State by designing the experience you have in mind. We&apos;ll guide you
                    through each step.&nbsp;
                    <br className='break'/>
                    
                    If your experience meets the quality standards,
                    you&apos;ll hear more about what&apos;s next.
                </p>
            </div>
            <style jsx>
                {`  
                    .guideContainer {
                        display: flex;
                        justify-content: center;
                        margin: 40px 0px;
                        padding: 0px 150px;
                    }

                    .guide {
                        text-align: center;
                        
                        
                    }

                    .guide p {
                        color: #88939e
                    }

                    @media (min-width: 300px) and (max-width: 768px){
                        
                        h2 {
                            font-size: 30px;
                        }

                        p {
                            font-size: 18px;
                        }

                        .guideContainer {
                            padding: 0px 30px;
                        }

                        .break {
                            display: none
                        }        

                    }

                    @media (min-width: 768px) and (max-width: 1280px){

                        .guideContainer {
                            padding: 0px 150px;
                        }

                        .break {
                            display: none
                        }                        

                    }

                `}
            </style>
        </div>
    )
}