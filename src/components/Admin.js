import React from 'react'
import '../Admin.css'
import 'bootstrap'
import { Link } from 'react-router-dom'

export const Admin = () => {
    return (
        <div className="admin-area">
            <form>
                <input type="file" className="btn btn-warning" /><br /><br />
                <button type="submit" className="btn btn-primary">Add</button>
                <Link to='/' className="btn btn-danger">Cancel</Link>
            </form>
        </div>
    )
}
