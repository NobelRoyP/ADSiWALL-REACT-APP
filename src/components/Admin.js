import React from 'react'
import '../Admin.css'
import 'bootstrap'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <div className="admin-area">
            <form method="POST" name="admin-add-file" data-netlify="true" action="POST">
                <input type="file" className="btn btn-warning" name="Photo" id="photo"/><br /><br />
                <button type="submit" className="btn btn-primary">Add</button>
                <Link to='/' className="btn btn-danger">Cancel</Link>
            </form>
        </div>
    )
}
export default Admin
