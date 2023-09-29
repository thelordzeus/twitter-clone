"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          signOut
        </button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn("google")} className="text-green-600 ml-auto">
      SignIN
    </button>
  );
};
