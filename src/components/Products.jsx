import React from 'react'
import { Link } from 'react-router-dom'
export default function Product() {
    return (
        <div>
            <p>this is products page</p> 
            <Link to="/products" className='underline'>
                go to dashboard
            </Link>
        </div>
    )
}