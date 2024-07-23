import { getSession, logout } from "@/utils/lib";
import Link from "next/link";
import { redirect } from "next/navigation";
const AuthLinkButton = async () => {
  const session = await getSession();
  if (session) {
    return (
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/");
        }}
      >
        <button
          type="submit"
          className="bg-indigo-600 px-4 py-2 rounded-xl text-white hover:bg-indigo-700"
        >
          Logout
        </button>
      </form>
    );
  } else {
    return (
      <Link
        href="/login"
        className="bg-indigo-600 px-4 py-2 rounded-xl text-white hover:bg-indigo-700"
      >
        Login
      </Link>
    );
  }
};

export default AuthLinkButton;
