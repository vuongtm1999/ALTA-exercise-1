import React, { useState } from "react";

type test = {
    name: string
}

const Test: React.FC = (props:test) =>  {
    const [user, setUser] = useState({name: 'Van', age: 23});

    return (
        <div className="App">
            <header className="App-header">
                <img src="test" className="App-logo" alt="logo"/>
                <h2>Hello {user.name}!</h2>
            </header>
        </div>
    );
};