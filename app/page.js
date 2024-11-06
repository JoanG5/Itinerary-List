"use client";

import AppSidebar from "./comp/AppSidebar";
import SignIn from "./comp/SignIn";
import { auth } from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <div>
        {user ? (
          <h1>
            Welcome, {user.displayName}
            <AppSidebar />
          </h1>
        ) : (
          <SignIn />
        )}
      </div>
    </div>
  );
}
