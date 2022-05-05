import React from 'react'
import '../AddPhoto.css'
import 'bootstrap'
import { Link } from 'react-router-dom'

const Add_Photo = () => {
    function getImagePreview(event) {
        var image = URL.createObjectURL(event.target.files[0]);
        var imagediv = document.getElementById('preview');
        var newimg = document.createElement('img');
        imagediv.innerHTML = '';
        newimg.src = image;
        newimg.width = "300";
        imagediv.appendChild(newimg);
    }
    return (
        <div className="admin-area">
            <h2>Add Form</h2>
            <form name="add-photo" data-netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true">
            <input type="hidden" name="form-name" value="add-photo" />
                <div className="form-group">
                    <label>Name: <input type="text" name="name" className="form-control" placeholder="Enter Name" required /></label>
                </div>
                <div className="form-group">
                    <label>Email: <input type="email" name="email" className="form-control" placeholder="Enter Email" required /></label>
                </div>
                <div className="form-group">
                    <label>Phone No: <input type="text" name="Phone No" className="form-control" placeholder="Enter country code eg: +91 1234567890" required /></label>
                </div>
                <div className="form-group">
                    <label>Photo of Ad: <input type="file" name="photo" className="form-control" style={{ height: "50px" }} onChange={getImagePreview} required /></label>
                </div>
                <div id="preview">PREVIEW</div>
                <div data-netlify-recaptcha="true" className="recaptcha" ></div>
                <button type="submit" className="btn btn-success" >send</button>
            </form>
        </div>
    )
}
export default Add_Photo
