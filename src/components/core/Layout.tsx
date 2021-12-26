import { CogIcon, LoginIcon } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import Loading from "./Loading";

const Layout: FC = ({ children }) => {
	const { status } = useSession();
	const { pathname, replace } = useRouter();

	if (status === "loading") return <Loading />;

	if (status === "authenticated" && pathname === "/login") {
		replace("/");

		return <Loading />;
	}

	return (
		<>
			<Head>
				<title>fluxdb</title>
			</Head>
			{pathname !== "/login" && (
				<nav className="h-14 flex pr-4 space-x-2 items-center border-b bar">
					<button
						className="h-full w-48 text-center border-r text-xl text-blue-500 transition hover:bg-gray-200 bar"
						title="home"
					>
						<Link href="/">fluxdb</Link>
					</button>
					<div className="flex-grow"></div>
					{status === "authenticated" ? (
						<button onClick={() => signOut()}>
							<CogIcon className="icon-button" />
						</button>
					) : (
						<button title="login">
							<Link href="/login">
								<LoginIcon className="icon-button" />
							</Link>
						</button>
					)}
				</nav>
			)}
			{children}
		</>
	);
};

export default Layout;
