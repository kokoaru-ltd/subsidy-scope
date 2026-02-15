"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface SearchInputProps {
	value?: string;
	placeholder?: string;
	onSearch: (query: string) => void;
	debounceMs?: number;
}

export function SearchInput({
	value: initialValue = "",
	placeholder = "キーワードで検索...",
	onSearch,
	debounceMs = 300,
}: SearchInputProps) {
	const [value, setValue] = useState(initialValue);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const v = e.target.value;
			setValue(v);
			if (timerRef.current) clearTimeout(timerRef.current);
			timerRef.current = setTimeout(() => onSearch(v), debounceMs);
		},
		[onSearch, debounceMs],
	);

	useEffect(() => {
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, []);

	return (
		<div className="relative">
			<svg
				className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-dim)]"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<circle cx="11" cy="11" r="8" />
				<path d="M21 21l-4.35-4.35" strokeLinecap="round" />
			</svg>
			<input
				type="text"
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				className="w-full pl-10 pr-10 py-2.5 rounded-lg text-sm bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--border-accent)] transition-colors"
			/>
			{value && (
				<button
					type="button"
					onClick={() => {
						setValue("");
						onSearch("");
					}}
					className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-dim)] hover:text-[var(--text-secondary)]"
				>
					<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
						<path d="M3 3l8 8M3 11L11 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
					</svg>
				</button>
			)}
		</div>
	);
}
