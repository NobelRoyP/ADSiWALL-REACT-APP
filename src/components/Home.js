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
                            <img src={Image.src} alt={Image.title} key={Image.id}/>
                        ))
                    }
                </div>
            </div>
            </div>
        )
    }
}
export default Home 


