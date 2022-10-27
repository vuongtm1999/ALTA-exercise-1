import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
    // dùng useState Type Assertion nếu chắc ăn là User không bao giờ null
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

//   const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Vishwas",
      email: "vishwas@example.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user?.name}</div>
    </div>
  );
};
