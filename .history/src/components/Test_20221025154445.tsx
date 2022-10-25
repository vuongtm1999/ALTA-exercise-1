import { useState } from "react";

interface States {
    name: string,
    age: number
}

const App: React.FC = () =>  {
    const [user, setUser] = useState<States>({name: 'Van', age: 23});

    return (
        <div className="App">
            <header className="App-header">
                <h2>Hello {user.name}!</h2>
                <h2>Hello {user.name}!</h2>
            </header>
        </div>
    );
};