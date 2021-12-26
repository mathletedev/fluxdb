import { signIn } from "next-auth/react";
import { FC } from "react";

const Login: FC = () => (
	<div className="h-screen w-screen flex">
		<button
			className="m-auto text-lg text-button"
			onClick={() => signIn("google")}
		>
			login with google
		</button>
	</div>
);

export default Login;
