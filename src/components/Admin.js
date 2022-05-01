import React from 'react'
import '../Admin.css'
import 'bootstrap'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <div className="admin-area">
            <form name="form1" method="post" data-netlify="true">
                <input type="text" name="name"/>
                <input type="text"/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
export default Admin
