import React, { Component } from 'react'
import Images from './images'
import Videos from './Videos'

export class Home extends Component {
     render() {
        return (
            <div>
                <div className="poster-area">
                <div className="poster">
                    {
                        Images.map((Image)=>(
                            <a href={Image.link}><img src={Image.src} alt={Image.title} key={Image.id}/></a>
                        ))
                    }
                </div>
<div id="iframe">
<iframe src="https://youtube.com/embed/Y8RGHSKjFaI" enctyped-media allowfullscreen></iframe>
</div>
                
            </div>
            </div>
        )
    }
}
export default Home


