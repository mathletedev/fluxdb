import { useRouter } from "next/router";
import { FC, useEffect } from "react";

const Path: FC = () => {
	const { replace } = useRouter();

	useEffect(() => {
		replace("/");
	});

	return <></>;
};

export default Path;
