import React, { useState } from "react";

type Greetprops = {
    name: string
    // Không cần chuyển cũng đc đối với prop messageCount
    messageCount?: number
    isLoggedIn: boolean
}

const App: React.FC = (props:Greetprops) =>  {
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