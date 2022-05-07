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
    Btn.style.background="grey";
    Btn.style.borderColor="#303030";
    Btn.style.color="#d4d4d4";
    Btn.style.pointerEvents="none";
    }
    return (
        <div className="admin-area">
            <h2>Add Form</h2>
            <form name="add-photo" method="POST" action="https://formsubmit.co/adsiwallweb@yahoo.com" enctype="multipart/form-data">
            <input type="hidden" name="form-name" value="add-photo" />
                <div className="form-group">
                    <label>Name: <input type="text" name="name" className="form-control" placeholder="Enter Name" required /></label>
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
                <button type="submit" className="btn btn-success" id="btn" onClick={loadingBtn}>send</button>
                <input type="hidden" name="_next" value="https://adsiwall.netlify.app/thanks" />
                <input type="hidden" name="_captcha" value="false"/>
            </form>
        </div>
    )
}
export default AddPhoto
