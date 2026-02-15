"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "motion/react";

interface AnimatedCounterProps {
	value: number;
	duration?: number;
	formatFn?: (n: number) => string;
}

export function AnimatedCounter({
	value,
	duration = 1.5,
	formatFn = (n) => Math.round(n).toLocaleString(),
}: AnimatedCounterProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const [displayed, setDisplayed] = useState("0");

	useEffect(() => {
		const controls = animate(0, value, {
			duration,
			ease: [0.32, 0.72, 0, 1],
			onUpdate: (latest) => setDisplayed(formatFn(latest)),
		});
		return () => controls.stop();
	}, [value, duration, formatFn]);

	return <span ref={ref}>{displayed}</span>;
}
