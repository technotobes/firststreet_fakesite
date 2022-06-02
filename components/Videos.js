import { useState, useEffect } from 'react'
import StockImage from '../public/assets/stockimage.png'
import Image from 'next/image'

export default function Videos() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchVideos()
    })
    
    const fetchVideos = async () => {
        const response = await fetch ('/api/videos')
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
                                        <div dangerouslySetInnerHTML={ {__html: video.description} } />
                                    </p>
                                </div>
                                <a href={video.url} target='_blank' rel='noferrer' className="player">
                                    <Image 
                                        src={StockImage}
                                        alt={video.title}
                                        width={550}
                                        height={300}
                                    />
                                    {/* Images from the API looks weird/un-usable */}
                                    {/* <img
                                        src={video.thumbnail_small} 
                                        alt={video.title}
                                        width={300}
                                        height={200}
                                    /> */}
                                </a>
                            </div>
                        )
                    })
                }
            </div>
            <style jsx>
                {`  
                    .player {
                        position: relative;
                    }

                    .player::after {
                        display:flex;
                        position: absolute;
                        left: 0;
                        top: 0;
                        background:linear-gradient(#ee2e1d, #ffb1b5);
                        opacity: 0.6;
                        width: 100%;
                        height: 300px;
                        content: url('assets/playbtn.png');
                        justify-content: center;
                        align-items: center;
                        border-radius: 6px;
                    }

                    .videosContainer {
                        display: flex;
                        justify-content: center;
                        margin-top: 40px;
                    }

                    .videos {
                        width: 90%;
                    }

                    .videoContainer {
                        display: flex;
                        justify-content: space-between;
                        height: 350px;
                        margin: 100px;
                    }

                    .videoInfo {
                        display:flex;
                        flex-direction: column;
                        width: 50%;
                        padding: 50px;
                        overflow: hidden;
                    }

                    .videoInfo p {
                        overflow-y: scroll;
                    }


                    .videoInfo h2 {
                        margin: 0px;
                    }

                    .videoInfo p div {
                        color: #88939e
                    }

                `}
            </style>
        </div>
    )
  }