"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface NavItem {
	label: string;
	href: string;
}

interface NavigationBarProps {
	brand: string;
	items: NavItem[];
	currentPath?: string;
}

export function NavigationBar({ brand, items, currentPath }: NavigationBarProps) {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[rgba(10,14,23,0.85)] backdrop-blur-xl">
			<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
				<a href="/" className="text-lg font-bold text-[var(--accent)] tracking-tight">
					{brand}
				</a>

				{/* Desktop */}
				<div className="hidden md:flex items-center gap-1">
					{items.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className={`px-3 py-2 rounded-md text-sm transition-colors ${
								currentPath === item.href
									? "text-[var(--accent)] bg-[var(--accent-subtle)]"
									: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg)]"
							}`}
						>
							{item.label}
						</a>
					))}
				</div>

				{/* Mobile toggle */}
				<button
					type="button"
					className="md:hidden text-[var(--text-secondary)] p-2"
					onClick={() => setMobileOpen(!mobileOpen)}
				>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path
							d={mobileOpen ? "M5 5l10 10M5 15L15 5" : "M3 5h14M3 10h14M3 15h14"}
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
					</svg>
				</button>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className="md:hidden border-t border-[var(--border)] bg-[var(--bg-primary)] overflow-hidden"
					>
						<div className="px-6 py-4 flex flex-col gap-1">
							{items.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className="px-3 py-2 rounded-md text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
								>
									{item.label}
								</a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
