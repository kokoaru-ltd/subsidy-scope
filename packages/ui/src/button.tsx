"use client";

import { type ReactNode, forwardRef } from "react";
import { type HTMLMotionProps, motion } from "motion/react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	loading?: boolean;
	icon?: ReactNode;
	children?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
	primary:
		"bg-[var(--accent)] text-[#0a0e17] hover:bg-[var(--accent-dim)] font-semibold",
	secondary:
		"bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] border border-[var(--border)]",
	outline:
		"bg-transparent text-[var(--accent)] border border-[var(--border-accent)] hover:bg-[var(--accent-subtle)]",
	ghost:
		"bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg)]",
};

const sizeStyles: Record<ButtonSize, string> = {
	sm: "px-3 py-1.5 text-sm rounded-md gap-1.5",
	md: "px-4 py-2 text-sm rounded-lg gap-2",
	lg: "px-6 py-3 text-base rounded-lg gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant = "primary", size = "md", loading, icon, children, className = "", disabled, ...props }, ref) => {
		return (
			<motion.button
				ref={ref}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				transition={{ type: "spring", stiffness: 400, damping: 20 }}
				className={`inline-flex items-center justify-center transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
				disabled={disabled || loading}
				{...props}
			>
				{loading ? (
					<span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
				) : icon ? (
					<span className="shrink-0">{icon}</span>
				) : null}
				{children}
			</motion.button>
		);
	},
);

Button.displayName = "Button";
