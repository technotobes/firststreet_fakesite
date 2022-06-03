import { useState, useEffect } from 'react'
import parse from 'html-react-parser'


function ReadMore({ children, maxCharacterCount = 100}) {
    const text = children;

    const [isTruncated, setIsTruncated] = useState(true);

    const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;

    function toggleIsTruncated() {
        setIsTruncated(!isTruncated)
    }

    return (
        <div className="description">
            <p>
                {resultString}
            </p>
            <span onClick={() => toggleIsTruncated()}>
                {isTruncated ? "Read More" : "Read Less"}
            </span>
            <style jsx>
                {`
                    p {
                        color: #88939E
                    }
                    span {
                        cursor: pointer;
                        color: #EE2D1C;
                    }
                `}
            </style>
        </div>
    )
}

export default function Videos() {
    const [videos, setVideos] = useState([])


    useEffect(() => {
        fetchVideos()
    }, [])
    
    const fetchVideos = async () => {
        const response = await fetch ('https://vimeo.com/api/v2/channel/staffpicks/videos.json')
        const data = await response.json()
        setVideos(data)
    }
    return (
        <div className="videosContainer">
            <div className="videos">
                {
                    videos.map(video => {
                        return (
                            <div key={video.id} className="videoContainer">
                                <div className="videoInfo">
                                    <h2>{video.title}</h2>
                                    <p>
                                        <ReadMore maxCharacterCount={1} className="description">
                                            {parse(video.description)}
                                        </ReadMore>
                                    </p>
                                </div>
                                <a href={video.url} target='_blank' rel='noferrer' className="player">
                                    <img 
                                        src={video.thumbnail_large}
                                        alt={video.title}
                                        width={580}
                                        height={320}
                                    />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
            <style jsx>
                {`  
                    .player {
                        display: flex;
                        position: relative;
                        top: 15px;
                    }

                    .player img {
                        border-radius: 5px;
                    }

                    .player::after {
                        display:flex;
                        position: absolute;
                        left: 0;
                        top: 0;
                        background:linear-gradient(#ee2e1d, #ffb1b5);
                        opacity: 0.6;
                        width: 100%;
                        height: 320px;
                        content: url('assets/playbtn.png');
                        justify-content: center;
                        align-items: center;
                        border-radius: 5px;
                    }

                    .videosContainer {
                        display: flex;
                        justify-content: center;
                        margin-top: 40px;
                    }

                    .videos {
                        width: 80%;
                    }

                    .videoContainer {
                        display: flex;
                        justify-content: space-between;
                        height: 400px;
                    }

                    .videoInfo {
                        display:flex;
                        flex-direction: column;
                        width: 50%;
                        padding-top: 60px;
                       
                    }

                    .videoInfo p {
                        overflow-y: auto;
                        height: 215px;
                       
                    }
                
                    .videoInfo h2 {
                        margin: 0px;
                    }

                `}
            </style>
        </div>
    )
  }