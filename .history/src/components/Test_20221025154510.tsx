import { useState } from "react";

type States = {
    name: string,
    age: number
}

const App: React.FC = () =>  {
    const [user, setUser] = useState<States>({name: 'Van', age: 23});

    return (
        <div className="App">
            <header className="App-header">
                <h2>Hello {user.name}!</h2>
                <h2>Hello {user.age}!</h2>
            </header>
        </div>
    );
};