import Head from "next/head";
import { FC } from "react";

const Layout: FC = ({ children }) => {
	return (
		<>
			<Head>
				<title>fluxdb</title>
			</Head>
			<nav>
				<div>fluxdb</div>
			</nav>
			{children}
		</>
	);
};

export default Layout;
