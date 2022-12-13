import React from 'react'
import "../css/navbar.css"

function Navbar() {
    return (
        <div>
            <header>
                <nav>
                    <div className="nav1">
                        <div className="logo">
                            <img src={require('../img/logo.png')} alt='logo' />
                        </div>
                        <div className="content">
                            <p style={{ color: 'white', fontWeight: '400', fontStyle: 'italic', fontSize: '11px', marginLeft: '2px', paddingRight: '5px' }}>Explore</p>
                            <p style={{ color: 'yellow', fontWeight: '600', fontStyle: 'italic', fontSize: '11px', }}>Plus</p>
                            <img src={require('../img/plus.png')} alt='logo' />
                        </div>
                    </div>
                    <div className="search">
                        <input type="text" name="" id="" placeholder="Search for products, brands and more " />
                        <i id="fonta1" class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="buttons">
                        <div className="btn1">
                            <p>Login</p>
                        </div>
                        <div className="btn2">
                            <p>Become a Seller</p>
                        </div>
                        <div className="btn2">
                            <p >More</p>
                            <i class="fa-sharp fa-solid fa-caret-down"></i>
                        </div>
                        <div  style={{marginLeft:"15px"}}className="btn2">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <p>Cart</p>
                        </div>
                    </div>
                </nav>

            </header>
        </div>
    )
}

export default Navbar