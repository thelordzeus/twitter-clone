"use client";
import { getProviders, signIn, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
export default async function LoginPage({}) {
  const providers = await getProviders();

  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="flex items-center justify-center h-screen ">
      {Object.values(providers).map((provider) => (
        <div>
          <button
            onClick={async () => {
              await signIn(provider.id);
            }}
            className=" bg-twitterWhite pl-3 pr-5 py-2 text-black rounded-full flex items-center space-x-2"
          >
            <img src="/googleImg.png" alt="Google Icon " className="h-8" />
            <span>Sign in with {provider.name}</span>
          </button>
        </div>
      ))}
    </div>
  );
}
