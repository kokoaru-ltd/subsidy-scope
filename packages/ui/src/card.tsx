"use client";

import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	hover?: boolean;
}

export function Card({ hover = false, className = "", children, ...props }: CardProps) {
	return (
		<div
			className={`rounded-xl border border-[var(--glass-border)] bg-[var(--bg-card)] backdrop-blur-[var(--glass-blur)] p-6 ${hover ? "transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-glow)]" : ""} ${className}`}
			{...props}
		>
			{children}
		</div>
	);
}
