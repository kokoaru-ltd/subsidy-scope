"use client";

import { motion } from "motion/react";
import type { HTMLAttributes, ReactNode } from "react";

export function FadeIn({
	children,
	delay = 0,
	className = "",
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function PageTransition({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function ScrollReveal({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function StaggerGrid({
	children,
	className = "",
}: HTMLAttributes<HTMLDivElement>) {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={{
				hidden: {},
				visible: { transition: { staggerChildren: 0.1 } },
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function StaggerItem({
	children,
	className = "",
}: HTMLAttributes<HTMLDivElement>) {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 20 },
				visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}
