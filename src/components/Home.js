import React, { Component } from 'react'
import Images from './images'

export class Home extends Component {
     render() {
        return (
            <div>
                <div className="poster-area">
                <div className="poster">
                    {
                        Images.map((Image)=>(
                         <div className="imgvid">
                            <a href={Image.link}><img src={Image.imgsrc} alt={Image.title} key={Image.id}/></a>
                            <a href={Image.link}><div className="link">{Image.name}</div></a>
                         </div>
                        ))
                    }
                </div>
                
            </div>
            </div>
        )
    }
}
export default Home


