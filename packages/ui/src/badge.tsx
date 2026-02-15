import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "active" | "upcoming" | "closed" | "archived";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
	default: "bg-[var(--glass-bg)] text-[var(--text-secondary)] border-[var(--glass-border)]",
	active: "bg-[rgba(0,212,170,0.1)] text-[var(--status-active)] border-[rgba(0,212,170,0.2)]",
	upcoming: "bg-[rgba(251,191,36,0.1)] text-[var(--status-upcoming)] border-[rgba(251,191,36,0.2)]",
	closed: "bg-[rgba(239,68,68,0.1)] text-[var(--status-closed)] border-[rgba(239,68,68,0.2)]",
	archived: "bg-[rgba(107,114,128,0.1)] text-[var(--status-archived)] border-[rgba(107,114,128,0.2)]",
};

export function Badge({ variant = "default", className = "", children, ...props }: BadgeProps) {
	return (
		<span
			className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border ${variantStyles[variant]} ${className}`}
			{...props}
		>
			{children}
		</span>
	);
}
