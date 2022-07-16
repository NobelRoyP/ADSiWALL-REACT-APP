import React from 'react'
import '../AddPhoto.css'
import 'bootstrap'

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
    function validationBtn() {
        var Input = document.querySelector(".form-control");
        var ValidationSpan = document.querySelector("#validationSpan");
        if (Input.value === "") {
            ValidationSpan.style.display = "block";
            ValidationSpan.innerHTML = "*Fill all fields";
            ValidationSpan.style.color = "red";
        }
    }
    return (
        <div className="add-form-area">
            <h2>Add Form</h2><br />
            <span id="validationSpan"></span>
            <form name="add-photo" method="POST" action="https://formsubmit.co/adsiwallweb@yahoo.com" enctype="multipart/form-data">
                <input type="hidden" name="form-name" value="add-photo" />
                <div className="form-group">
                    <label>Your Name: <input type="text" name="Name" className="form-control" placeholder="Enter Name" required autocomplete="off" /></label>
                </div>
                <div className="form-group">
                    <label>Category:
                        <select name="Category" className="form-select">
                            <option>Shopping Site</option>
                            <option>Instagram</option>
                            <option>Facebook</option>
                            <option>Twitter</option>
                            <option>YouTube</option>
                            <option>Blog</option>
                            <option>Website</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label>Email: <input type="email" name="Email" className="form-control" placeholder="Enter Email" required autoComplete="off" /></label>
                </div>
                <div className="form-group">
                    <label>Country: 
                        <select name="Country" className="form-select">
                            <option>India</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label>Phone No: <input type="text" name="Phone" className="form-control" placeholder="Enter Phone Your Number" required autoComplete="off" /></label>
                </div>
                <div className="form-group">
                    <label>Photo of Ad: <input type="file" name="Attachment" className="form-control" style={{ height: "50px" }} onChange={getImagePreview} required accept="image/png, image/jpeg" /></label>
                </div>
                <div id="preview">PREVIEW</div>
                <div className="form-group">
                    <label>URL: <input type="text" name="Link" className="form-control" placeholder="link to your website,Instagram,Facebook,etc..." required autoComplete="off" /></label>
                </div>
                <button type="submit" className="btn btn-success" id="btn" onClick={validationBtn}>Send</button>
                <input type="hidden" name="_next" value="https://adsiwallofficial.netlify.app/thanks" />
                <input type="hidden" name="_captcha" value="false" />
            </form>
        </div>
    )
}
export default AddPhoto
