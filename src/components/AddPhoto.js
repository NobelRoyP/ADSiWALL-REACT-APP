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
    return (
        <div className="admin-area">
            <h2>Add Form</h2>
            
        </div>
    )
}
export default AddPhoto
