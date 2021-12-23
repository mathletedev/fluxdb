import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const Layout: FC = ({ children }) => {
	return (
		<>
			<Head>
				<title>fluxdb</title>
			</Head>
			<nav className="h-14 flex pr-4 space-x-2 items-center border-b bar">
				<button
					className="h-full w-48 text-center border-r text-xl text-blue-500 transition hover:bg-gray-200 bar"
					title="home"
				>
					<Link href="/">fluxdb</Link>
				</button>
			</nav>
			{children}
		</>
	);
};

export default Layout;
