import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <div>{children}</div>
    </SessionProvider>
  );
};

export default Providers;
