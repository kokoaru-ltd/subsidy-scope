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
	linkComponent?: React.ElementType;
}

export function NavigationBar({ brand, items, currentPath, linkComponent: LinkComp = "a" }: NavigationBarProps) {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[rgba(10,14,23,0.8)] backdrop-blur-2xl">
			<div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
				<LinkComp href="/" className="flex items-center gap-3">
					<div className="w-9 h-9 rounded-lg bg-[var(--accent)] flex items-center justify-center">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a0e17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
							<circle cx="11" cy="11" r="8" />
							<path d="M21 21l-4.35-4.35" />
						</svg>
					</div>
					<span className="text-2xl font-extrabold text-white tracking-tight">
						{brand}
					</span>
				</LinkComp>

				{/* Desktop */}
				<div className="hidden md:flex items-center gap-2">
					{items.map((item) => (
						<LinkComp
							key={item.href}
							href={item.href}
							className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
								currentPath === item.href
									? "text-[var(--accent)] bg-[var(--accent-subtle)]"
									: "text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.08)]"
							}`}
						>
							{item.label}
						</LinkComp>
					))}
				</div>

				{/* Mobile toggle */}
				<button
					type="button"
					className="md:hidden text-[var(--text-secondary)] p-2"
					onClick={() => setMobileOpen(!mobileOpen)}
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d={mobileOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}
							stroke="currentColor"
							strokeWidth="2"
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
						className="md:hidden border-t border-[var(--border)] bg-[rgba(10,14,23,0.95)] backdrop-blur-2xl overflow-hidden"
					>
						<div className="px-8 py-6 flex flex-col gap-2">
							{items.map((item) => (
								<LinkComp
									key={item.href}
									href={item.href}
									className="px-4 py-3 rounded-lg text-base font-medium text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.08)]"
								>
									{item.label}
								</LinkComp>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
