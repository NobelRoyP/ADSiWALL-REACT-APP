import React, { Component } from 'react'
import Images from './images'

export class Home extends Component {
     render() {
        const showDiv = () => {
        ImageLink = document.getElementById("loadingDiv");
     
        ImageLink.style.opacity="1";
        }
        return (
            <div>
                <div className="poster-area">
                <div className="poster">
                    {
                        Images.map((Image)=>(
                            <a href={Image.link} onClick={showDiv}><img src={Image.src} alt={Image.title} key={Image.id}/></a>
                        ))
                    }
                    <div id="loadingDiv">Loading...</div>
                </div>
            </div>
            </div>
        )
    }
}
export default Home


