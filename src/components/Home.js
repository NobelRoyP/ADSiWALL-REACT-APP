import React, { Component } from 'react'
import Images from './images'
import $ from 'https://code.jquery.com/jquery-3.6.0.min.js'

export class Home extends Component {
     render() {
        const showDiv = () => {
        var ImageLink = document.getElementById("loadingDiv");
     
        ImageLink.style.opacity="1";
        }
        setTimeout(() => {
        $(window).on("load", function(){
          $(".loader").fadeOut(2000);
        })
        }, 3000);
        return (
            <div>
                <div className="poster-area">
                <div className="poster">
                    {
                        Images.map((Image)=>(
                            <a href={Image.link} onClick={showDiv}><img src={Image.src} alt={Image.title} key={Image.id}/></a>
                        ))
                    }
                    <div id="loadingDiv" className="loader">Loading...</div>
                </div>
            </div>
            </div>
        )
    }
}
export default Home


