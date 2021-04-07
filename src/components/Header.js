import React from 'react'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand">
                    <img src="/img/expensive.svg" width="30" height="30" className="d-inline-block align-top" alt="logo-shop.svg" />
                    <span className="ml-2">Expenses</span>
                </span>
            </nav>
        </>
    );
}

export default Header;