import { getProviders } from "next-auth/react";
export default function LoginPage({ providers }) {
  return (
    <div className="flex items-center justify-center h-screen ">
      login page here
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
