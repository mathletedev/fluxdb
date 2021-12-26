import { useSession } from "next-auth/react";
import { FC } from "react";
import Loading from "../core/Loading";
import Sidebar from "../navigation/Sidebar";

const Dashboard: FC = () => {
	const { data, status } = useSession();

	if (status === "loading") return <Loading />;

	return (
		<>
			<Sidebar />
			<div className="main">
				hello
				{status === "authenticated"
					? `, ${data?.user?.name?.toLowerCase()}`
					: ""}
				!
			</div>
		</>
	);
};

export default Dashboard;
