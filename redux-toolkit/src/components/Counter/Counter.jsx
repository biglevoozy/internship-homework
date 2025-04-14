import { useDispatch, useSelector } from "react-redux";

import Button from "../ui/Button/Button";
import Heading from "../ui/Heading/Heading";

import {
	decrement,
	increment,
	reset,
} from "@/redux/features/counter/counterSlice";

import styles from "./Counter.module.css";

const Counter = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	return (
		<section className={styles.wrapper}>
			<Heading>Counter: {count}</Heading>

			<div className={styles.btnWrapper}>
				<Button placeholder="Increment" onClick={() => dispatch(increment())} />
				<Button placeholder="Reset" onClick={() => dispatch(reset())} />
				<Button placeholder="Decrement" onClick={() => dispatch(decrement())} />
			</div>
		</section>
	);
};

export default Counter;
