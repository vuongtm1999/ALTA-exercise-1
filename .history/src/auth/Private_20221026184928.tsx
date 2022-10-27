import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  // Tra ve component gi do nhan prop theo kieu ProfileProps
  Component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Vuong Tran62" />;
  } else {
    return <Login />;
  }
};
