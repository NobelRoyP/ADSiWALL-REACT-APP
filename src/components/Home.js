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
                <div className="poster">
                  {
                        Videos.map((Video)=>(
                            <a href={Image.link}><iframe src={Image.src} alt={Image.title} key={Image.id} enctyped-media allowfullscreen></iframe></a>
                        ))
                  }
                </div>
            </div>
            </div>
        )
    }
}
export default Home


