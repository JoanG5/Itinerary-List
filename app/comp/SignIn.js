import React from "react";
import { auth } from "../firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "@/components/ui/button";

function SignIn() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google: ", error.message);
    }
  };

  return (
    <>
      <Button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </Button>
    </>
  );
}

export default SignIn;
