import React, { Component } from 'react'
import Images from './ImageFiles/Instagram_Images'

export class Home extends Component {
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
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6673846975177036" crossorigin="anonymous"></script>
<!-- Test -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-6673846975177036"
     data-ad-slot="9437493746"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
            </div>
        )
    }
}
export default Home


