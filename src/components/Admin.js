import React from 'react'
import '../Admin.css'
import 'bootstrap'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <div className="admin-area">
            <form method="post" name="admin" data-netlify="true" onSubmit="submit">
                <input type="hidden" name="form name" value="admin" />
                <input type="text" name="name" placeholder="Enter your Name"/>
                <input type="file" className="btn btn-warning" name="photo" id="photo"/><br/><br/>
                <button type="submit" className="btn btn-primary">Add</button>
                <Link to='/' className="btn btn-danger">Cancel</Link>
            </form>
        </div>
    )
}
export default Admin
