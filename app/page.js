"use client";

import AppSidebar from "./comp/AppSidebar";
import SignIn from "./comp/SignIn";
import { auth } from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import sillyCat from "./assets/cat-silly.png";

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div>
        {user ? (
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Welcome, {user.displayName}
            </h1>
            <img
              src="./assets/cat-silly.png"
              alt="Welcome Image"
              style={{ marginTop: "1rem", width: "200px", height: "200px" }}
            />
          </div>
        ) : (
          <SignIn />
        )}
      </div>
    </div>
  );
}
