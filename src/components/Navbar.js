import React, { useEffect, useState } from "react"

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {

    }, [])

    return (
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Stormboard</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Signup</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
