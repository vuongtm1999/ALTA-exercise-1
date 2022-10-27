import { useState } from "react";

interface States {
    name: string,
    age: number
}

const Test: React.FC = () =>  {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [user, setUser] = useState<States>({name: 'Van', age: 23});

    return (
        <div className="App">
            <header className="App-header">
                <h2>Hello {user.name}!</h2>
                <h2>age {user.age}!</h2>
            </header>
        </div>
    );
};

export default Test