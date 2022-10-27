import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  // Tra ve component ProfileProps
  Component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Vishwas" />;
  } else {
    return <Login />;
  }
};
