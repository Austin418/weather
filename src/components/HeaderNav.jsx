import { useState } from 'react'


const HeaderNave = ({}) => {
    
    return (
        <header className="header">
            <h2 className="headerText"></h2>
            <nav className="nav">
                <h4 className="navButton minutely"></h4>
                <h4 className="navButton hourly"></h4>
                <h4 className="navButton daily"></h4>
            </nav>
        </header>
    )
}