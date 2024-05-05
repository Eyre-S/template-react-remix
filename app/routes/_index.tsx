import type { MetaFunction } from "@remix-run/node";
import { classes } from "~/utils/element";

import styles from "./_index.module.styl";
import ReactUwu from "~/components/react-uwu";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div className={classes(styles.main)}>
			<div className={classes(styles.titleArea)}>
				<ReactUwu className={classes(styles.logo)} />
				<span className={classes(styles.title)}>Your next Web.tsx !</span>
				<span>A project template using React + Remix + Vite + Stylus for making a better website.</span>
			</div>
		</div>
	);
}
