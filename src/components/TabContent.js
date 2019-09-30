import React from "react"

import "../TabContent.css";

import PostData from "../data/posts.json"
import Tabs from "./Tabs";
import '../App.css';

import FetchImage from "./FetchImage"
import FetchText from "./FetchText"
import AudioPlayer from "./AudioPlayer"



// creates each tab from the json file in post.json, each tab consists of 3 components
// 1. FetchImage which is the gets the image
// 2. FetchText which gets the text
// 3. AudioPlayer which gets the audio file.
function TabContent(props){
    const pData = PostData.map(item =>
        <div label={item.lab} className="tab-item">
            <div className={"Tab-Content"} >
                <div className={"pic"}>
                    <FetchImage imageName={props.imageName}
                                pictureCategory={props.pictureCategory}
                    />
                </div>
                <div className={"info"}>
                    <div className={"info-text"}>
                        <FetchText
                            tabCategory={props.tabCategory}
                            textCategory={props.textCategory}
                        />
                    </div>
                    <div className={"play-button"}>
                        <AudioPlayer
                            soundCategory={props.soundCategory}
                            soundName={props.soundName}
                        />
                    </div>
                </div>
            </div>
        </div>
        )


    return(
        <Tabs handleClick={props.handleClick} tabCategory={props.tabCategory}>
            {pData}
        </Tabs>
    )
}

export default TabContent
