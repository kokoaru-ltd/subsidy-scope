"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface GlowCardProps {
	glowColor?: string;
	className?: string;
	children?: ReactNode;
}

export function GlowCard({
	glowColor = "rgba(0, 212, 170, 0.35)",
	className = "",
	children,
}: GlowCardProps) {
	return (
		<motion.div
			whileHover={{ y: -4 }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
			className={`group relative rounded-xl border border-[var(--glass-border)] bg-[var(--bg-card)] backdrop-blur-[var(--glass-blur)] p-6 transition-all duration-300 hover:border-[var(--border-hover)] ${className}`}
			style={{
				boxShadow: `0 4px 24px rgba(0,0,0,0.3)`,
			}}
		>
			<div
				className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
				style={{
					boxShadow: `0 0 30px ${glowColor}, inset 0 0 30px ${glowColor.replace("0.35", "0.05")}`,
				}}
			/>
			<div className="relative z-10">{children}</div>
		</motion.div>
	);
}
