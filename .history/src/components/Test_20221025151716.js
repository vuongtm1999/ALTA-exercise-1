import React, { useState } from "react";

const App: React.FC = () =>  {
    const [user, setUser] = useState({name: 'Van', age: 23});

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Hello {user.name}!</h2>
            </header>
        </div>
    );
};