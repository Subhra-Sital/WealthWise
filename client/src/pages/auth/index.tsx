import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton
  } from "@clerk/clerk-react";
  import { Navigate } from "react-router-dom";
  
  export const Auth = () => {
    return (
      <div className="sign-in-container">
        <SignedOut>
          <h1> Welcome to Your Own Personal Finance Tracker!</h1>
          <SignUpButton mode="modal" />
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton/>
          <Navigate to="/" />
        </SignedIn>
      </div>
    );
  };