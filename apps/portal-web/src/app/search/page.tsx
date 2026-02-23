"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useMemo, useState } from "react";
import {
	SearchInput,
	SubsidyCard,
	PaginationUI,
	Badge,
	FadeIn,
	StaggerGrid,
	StaggerItem,
	SkeletonCard,
} from "@subsidy-scope/ui";
import { Nav } from "@/components/nav";
import { filterSubsidies } from "@/lib/mock-data";

const STATUS_OPTIONS = [
	{ value: "ACTIVE", label: "受付中", variant: "active" as const },
	{ value: "UPCOMING", label: "近日開始", variant: "upcoming" as const },
	{ value: "CLOSED", label: "受付終了", variant: "closed" as const },
];

const REGION_OPTIONS = [
	"全国",
	"北海道",
	"東京都",
	"愛知県",
	"大阪府",
	"福岡県",
];

function SearchContent() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const initialKeyword = searchParams.get("keyword") || "";
	const initialStatus = searchParams.get("status") || "";
	const initialRegion = searchParams.get("region") || "";
	const initialPage = Number(searchParams.get("page")) || 1;

	const [keyword, setKeyword] = useState(initialKeyword);
	const [selectedStatus, setSelectedStatus] = useState(initialStatus);
	const [selectedRegion, setSelectedRegion] = useState(initialRegion);
	const [currentPage, setCurrentPage] = useState(initialPage);

	const results = useMemo(
		() =>
			filterSubsidies({
				keyword,
				status: selectedStatus || undefined,
				region: selectedRegion || undefined,
				page: currentPage,
				limit: 6,
			}),
		[keyword, selectedStatus, selectedRegion, currentPage],
	);

	const updateURL = useCallback(
		(params: {
			keyword?: string;
			status?: string;
			region?: string;
			page?: number;
		}) => {
			const sp = new URLSearchParams();
			const kw = params.keyword ?? keyword;
			const st = params.status ?? selectedStatus;
			const rg = params.region ?? selectedRegion;
			const pg = params.page ?? 1;

			if (kw) sp.set("keyword", kw);
			if (st) sp.set("status", st);
			if (rg) sp.set("region", rg);
			if (pg > 1) sp.set("page", String(pg));

			router.push(`/search?${sp.toString()}`);
		},
		[router, keyword, selectedStatus, selectedRegion],
	);

	function handleSearch(query: string) {
		setKeyword(query);
		setCurrentPage(1);
		updateURL({ keyword: query, page: 1 });
	}

	function handleStatusChange(status: string) {
		const newStatus = selectedStatus === status ? "" : status;
		setSelectedStatus(newStatus);
		setCurrentPage(1);
		updateURL({ status: newStatus, page: 1 });
	}

	function handleRegionChange(region: string) {
		const newRegion = selectedRegion === region ? "" : region;
		setSelectedRegion(newRegion);
		setCurrentPage(1);
		updateURL({ region: newRegion, page: 1 });
	}

	function handlePageChange(page: number) {
		setCurrentPage(page);
		updateURL({ page });
	}

	return (
		<div className="min-h-screen max-w-7xl mx-auto px-6 py-8">
			<FadeIn>
				<div className="max-w-2xl mx-auto mb-8">
					<SearchInput
						value={keyword}
						placeholder="補助金名、キーワードで検索..."
						onSearch={handleSearch}
					/>
				</div>
			</FadeIn>

			<div className="flex gap-8">
				<aside className="hidden lg:block w-64 shrink-0">
					<div className="sticky top-24 space-y-6">
						<div className="rounded-xl border border-[var(--glass-border)] bg-[var(--bg-card)] backdrop-blur-[var(--glass-blur)] p-5">
							<h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
								ステータス
							</h3>
							<div className="space-y-2">
								{STATUS_OPTIONS.map((opt) => (
									<label
										key={opt.value}
										className="flex items-center gap-3 cursor-pointer group"
									>
										<input
											type="checkbox"
											checked={selectedStatus === opt.value}
											onChange={() => handleStatusChange(opt.value)}
											className="w-4 h-4 rounded border-[var(--glass-border)] bg-[var(--glass-bg)] accent-[var(--accent)]"
										/>
										<Badge variant={opt.variant}>{opt.label}</Badge>
									</label>
								))}
							</div>
						</div>

						<div className="rounded-xl border border-[var(--glass-border)] bg-[var(--bg-card)] backdrop-blur-[var(--glass-blur)] p-5">
							<h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
								地域
							</h3>
							<div className="space-y-2">
								{REGION_OPTIONS.map((region) => (
									<label
										key={region}
										className="flex items-center gap-3 cursor-pointer group"
									>
										<input
											type="checkbox"
											checked={selectedRegion === region}
											onChange={() => handleRegionChange(region)}
											className="w-4 h-4 rounded border-[var(--glass-border)] bg-[var(--glass-bg)] accent-[var(--accent)]"
										/>
										<span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
											{region}
										</span>
									</label>
								))}
							</div>
						</div>

						{(selectedStatus || selectedRegion) && (
							<button
								type="button"
								onClick={() => {
									setSelectedStatus("");
									setSelectedRegion("");
									setCurrentPage(1);
									updateURL({ status: "", region: "", page: 1 });
								}}
								className="text-sm text-[var(--accent)] hover:text-[var(--accent-dim)] transition-colors cursor-pointer"
							>
								フィルターをクリア
							</button>
						)}
					</div>
				</aside>

				<div className="flex-1 min-w-0">
					<div className="flex items-center justify-between mb-6">
						<p className="text-sm text-[var(--text-secondary)]">
							{results.total > 0 ? (
								<>
									<span className="text-[var(--text-primary)] font-medium">
										{results.total}件
									</span>
									の補助金が見つかりました
								</>
							) : (
								"条件に一致する補助金が見つかりませんでした"
							)}
						</p>

						<div className="lg:hidden flex gap-2 flex-wrap">
							{STATUS_OPTIONS.map((opt) => (
								<button
									key={opt.value}
									type="button"
									onClick={() => handleStatusChange(opt.value)}
									className="cursor-pointer"
								>
									<Badge
										variant={
											selectedStatus === opt.value ? opt.variant : "default"
										}
									>
										{opt.label}
									</Badge>
								</button>
							))}
						</div>
					</div>

					{results.data.length > 0 ? (
						<StaggerGrid className="grid grid-cols-1 xl:grid-cols-2 gap-5">
							{results.data.map((subsidy) => (
								<StaggerItem key={subsidy.id}>
									<SubsidyCard
										id={subsidy.id}
										title={subsidy.title}
										description={subsidy.description}
										subsidyMaxLimit={subsidy.subsidyMaxLimit}
										subsidyRate={subsidy.subsidyRate}
										acceptanceEndDatetime={subsidy.acceptanceEndDatetime}
										status={subsidy.status}
										regions={subsidy.regions}
										category={subsidy.category}
										href={`/subsidy/${subsidy.id}`}
										url={subsidy.url}
									/>
								</StaggerItem>
							))}
						</StaggerGrid>
					) : (
						<div className="flex flex-col items-center justify-center py-24 text-center">
							<div className="w-16 h-16 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center mb-4">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									className="text-[var(--text-dim)]"
								>
									<circle cx="11" cy="11" r="8" />
									<path d="M21 21l-4.35-4.35" strokeLinecap="round" />
								</svg>
							</div>
							<p className="text-[var(--text-secondary)] text-sm">
								検索条件を変更してお試しください
							</p>
						</div>
					)}

					{results.totalPages > 1 && (
						<div className="mt-10">
							<PaginationUI
								page={currentPage}
								totalPages={results.totalPages}
								onPageChange={handlePageChange}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

function SearchLoading() {
	return (
		<div className="min-h-screen max-w-7xl mx-auto px-6 py-8">
			<div className="max-w-2xl mx-auto mb-8">
				<div className="h-11 rounded-lg bg-[var(--glass-bg)] animate-pulse" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:ml-72">
				{Array.from({ length: 6 }).map((_, i) => (
					<SkeletonCard key={i} />
				))}
			</div>
		</div>
	);
}

export default function SearchPage() {
	return (
		<>
			<Nav />
			<div className="h-20" />
			<Suspense fallback={<SearchLoading />}>
				<SearchContent />
			</Suspense>
		</>
	);
}
