import { HTMLAttributes } from "react";

export default function ReactUwu(props: HTMLAttributes<HTMLElement>) {
	return (
		<img
			{...props}
			src="https://raw.githubusercontent.com/irfanhakim-as/vtuber-icons/master/icons/react.png"
			alt="uwu versions React logo"
		></img>
	);
}
