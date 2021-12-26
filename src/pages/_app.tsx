import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { FC } from "react";
import Layout from "../components/core/Layout";
import "../globals.css";

const _App: FC<AppProps> = ({
	Component,
	pageProps: { session, ...pageProps }
}) => (
	<SessionProvider session={session}>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</SessionProvider>
);

export default _App;
