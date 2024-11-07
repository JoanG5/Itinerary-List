"use client";

import React from "react";
import Submit from "../comp/Submit";
import AppSidebar from "../comp/AppSidebar";
import SignIn from "../comp/SignIn";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import BottomBar from "../comp/BottomBar";

function Form() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <h1>
          <Submit />
          <AppSidebar />
          <BottomBar />
        </h1>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Form;
