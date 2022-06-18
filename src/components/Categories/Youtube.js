import React, { Component } from 'react'
import Images from './ImageFiles/Youtube_Images'

export class Youtube extends Component {
    render() {
        return (
            <div>
                <div className="poster-area">
                    <div className="poster">
                        {
                            Images.map((Image) => (
                                <div className="post">
                                    <a href={Image.link}><img src={Image.imgsrc} alt={Image.title} key={Image.id} /></a>
                                    <a href={Image.link}><div className="link"><h5>{Image.category} <i className="fa-solid fa-arrow-up-right-from-square"></i></h5></div></a>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        )
    }
}

export default Youtube
