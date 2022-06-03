import React from 'react'
import '../AddPhoto.css'
import 'bootstrap'
import { Link } from 'react-router-dom'

const AddPhoto = () => {
    function getImagePreview(event) {
        var image = URL.createObjectURL(event.target.files[0]);
        var imagediv = document.getElementById('preview');
        var newimg = document.createElement('img');
        imagediv.innerHTML = '';
        newimg.src = image;
        newimg.width = "300";
        imagediv.appendChild(newimg);
    }
    function loadingBtn() {
    var Btn = document.getElementById("btn");
    var Input = document.querySelector('.form-control');
    
    if(Input.value===""){
        Btn.style.background="yellow";
        Btn.style.borderColor="yellow";
        Btn.style.color="red";
        Btn.style.pointerEvents="none";
        Btn.innerHTML="complete the form"
    }
        else{
            Btn.style.background="green";
            Btn.style.borderColor="green";
            Btn.style.color="white";
            Btn.style.pointerEvents="none";
            Btn.innerHTML="Loading..."
        }
    }
    function onFocusInput(){
    var Btn = document.getElementById("btn");
    var Input = document.querySelector('.form-control');

        Btn.style.background="green";
        Btn.style.borderColor="green";
        Btn.style.color="white";
        Btn.style.pointerEvents="auto";
        Btn.innerHTML="send"
    }
    return (
        <div className="admin-area">
            <h2>Add Form</h2>
            <form name="add-photo" method="POST" action="https://formsubmit.co/adsiwallweb@yahoo.com" enctype="multipart/form-data">
            <input type="hidden" name="form-name" value="add-photo" />
                <div className="form-group">
                    <label>Name: <input type="text" name="name" className="form-control" placeholder="Enter Name" required onFocus={onFocusInput}/></label>
                </div>
                <div className="form-group">
                    <label>Email: <input type="email" name="email" className="form-control" placeholder="Enter Email" required /></label>
                </div>
                <div className="form-group">
                    <label>Phone No: <input type="text" name="phone" className="form-control" placeholder="enter code first:- +91" required /></label>
                </div>
                <div className="form-group">
                    <label>Photo of Ad: <input type="file" name="attachment" className="form-control" style={{ height: "50px" }} onChange={getImagePreview} required accept="image/png, image/jpeg"/></label>
                </div>
                <div id="preview">PREVIEW</div>
                <div className="form-group">
                    <label>URL: <input type="text" name="link" className="form-control" placeholder="link to your website,Instagram,Facebook,etc..." required /></label>
                </div>
                <button type="submit" className="btn btn-success" id="btn" onClick={loadingBtn}>send</button>
                <input type="hidden" name="_next" value="https://adsiwall.netlify.app/thanks" />
                <input type="hidden" name="_captcha" value="false"/>
            </form>
        </div>
    )
}
export default AddPhoto
