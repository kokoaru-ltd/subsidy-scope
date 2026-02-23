"use client";

import { useState, useMemo, useCallback } from "react";
import {
	Button,
	Card,
	FadeIn,
	ScrollReveal,
	SearchInput,
	Badge,
	GlowCard,
} from "@subsidy-scope/ui";
import { Nav } from "../../components/nav";
import { mockSubsidies, type MockSubsidy } from "../../lib/mock-data";

function formatYen(amount: number | null): string {
	if (amount === null) return "金額未定";
	if (amount >= 100_000_000)
		return `${(amount / 100_000_000).toFixed(1).replace(/\.0$/, "")}億円`;
	if (amount >= 10_000)
		return `${Math.round(amount / 10_000).toLocaleString()}万円`;
	return `${amount.toLocaleString()}円`;
}

interface FormData {
	businessOverview: string;
	purpose: string;
	industry: string;
	employees: string;
	location: string;
	budget: string;
}

const initialForm: FormData = {
	businessOverview: "",
	purpose: "",
	industry: "",
	employees: "",
	location: "",
	budget: "",
};

function buildPrompt(subsidy: MockSubsidy, form: FormData): string {
	const regions = subsidy.regions.join("、");
	const deadline = subsidy.acceptanceEndDatetime
		? new Date(subsidy.acceptanceEndDatetime).toLocaleDateString("ja-JP")
		: "未定";

	return `あなたは補助金申請の専門家です。以下の補助金に申請する事業計画書を精製してください。

【補助金情報】
- 名称: ${subsidy.title}
- 補助上限: ${formatYen(subsidy.subsidyMaxLimit)}
- 補助率: ${subsidy.subsidyRate || "要確認"}
- 対象地域: ${regions}
- カテゴリ: ${subsidy.category}
- 締切: ${deadline}
- 詳細URL: ${subsidy.url}

【申請者の事業概要】
${form.businessOverview}

【事業の目的・背景】
${form.purpose}

【申請者情報】
- 業種: ${form.industry}
- 従業員数: ${form.employees}
- 所在地: ${form.location}

【予算計画】
${form.budget}

以下の観点で申請書を精製してください：
1. 補助金の審査基準に合致する表現への書き換え
2. 具体的な数値目標の提案
3. 事業の新規性・革新性の強調
4. 地域経済への波及効果の明記
5. 実現可能性を示すスケジュール案
6. 補助金の目的に沿った成果指標（KPI）の設定

出力は以下の構成でお願いします：
- 事業計画書（本文）
- 数値目標・KPI一覧
- 想定スケジュール
- 予算内訳案`;
}

export default function ApplyPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedSubsidy, setSelectedSubsidy] = useState<MockSubsidy | null>(
		null,
	);
	const [form, setForm] = useState<FormData>(initialForm);
	const [generatedPrompt, setGeneratedPrompt] = useState("");
	const [copied, setCopied] = useState(false);

	const searchResults = useMemo(() => {
		if (!searchQuery.trim()) return [];
		const kw = searchQuery.toLowerCase();
		return mockSubsidies
			.filter(
				(s) =>
					s.status === "ACTIVE" &&
					(s.title.toLowerCase().includes(kw) ||
						s.description.toLowerCase().includes(kw) ||
						s.category.toLowerCase().includes(kw)),
			)
			.slice(0, 8);
	}, [searchQuery]);

	const handleFormChange = useCallback(
		(field: keyof FormData, value: string) => {
			setForm((prev) => ({ ...prev, [field]: value }));
		},
		[],
	);

	const canGenerate =
		selectedSubsidy &&
		form.businessOverview.trim() &&
		form.purpose.trim() &&
		form.industry.trim();

	const handleGenerate = () => {
		if (!selectedSubsidy) return;
		const prompt = buildPrompt(selectedSubsidy, form);
		setGeneratedPrompt(prompt);
	};

	const handleCopy = async () => {
		await navigator.clipboard.writeText(generatedPrompt);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<>
			<Nav />
			<main className="min-h-screen pt-28 pb-20 px-4">
				<div className="max-w-3xl mx-auto">
					<FadeIn>
						<h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
							申請書AI精製
						</h1>
						<p className="text-[var(--text-secondary)] mb-8">
							補助金情報と事業内容を入力すると、ChatGPT・Claudeにそのまま貼れる申請書精製プロンプトを生成します。
						</p>
					</FadeIn>

					{/* Step 1: 補助金選択 */}
					<ScrollReveal>
						<Card className="mb-6">
							<h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
								<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--accent)] text-[#0a0e17] text-sm font-bold mr-2">
									1
								</span>
								補助金を選択
							</h2>

							<SearchInput
								placeholder="補助金名・キーワードで検索..."
								onSearch={setSearchQuery}
							/>

							{/* Search results */}
							{searchQuery && searchResults.length > 0 && !selectedSubsidy && (
								<div className="mt-3 space-y-2 max-h-80 overflow-y-auto">
									{searchResults.map((s) => (
										<button
											key={s.id}
											type="button"
											onClick={() => {
												setSelectedSubsidy(s);
												setSearchQuery("");
											}}
											className="w-full text-left p-3 rounded-lg border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:border-[var(--border-accent)] transition-colors cursor-pointer"
										>
											<div className="flex items-center gap-2 mb-1">
												<Badge variant="active">受付中</Badge>
												<Badge>{s.category}</Badge>
											</div>
											<p className="text-sm font-medium text-[var(--text-primary)] line-clamp-2">
												{s.title}
											</p>
											<p className="text-xs text-[var(--accent)] mt-1">
												{formatYen(s.subsidyMaxLimit)}
												{s.subsidyRate && ` ・ 補助率 ${s.subsidyRate}`}
											</p>
										</button>
									))}
								</div>
							)}

							{searchQuery && searchResults.length === 0 && !selectedSubsidy && (
								<p className="mt-3 text-sm text-[var(--text-dim)]">
									該当する補助金が見つかりません
								</p>
							)}

							{/* Selected subsidy preview */}
							{selectedSubsidy && (
								<div className="mt-4">
									<GlowCard className="relative">
										<button
											type="button"
											onClick={() => setSelectedSubsidy(null)}
											className="absolute top-3 right-3 text-[var(--text-dim)] hover:text-[var(--text-primary)] cursor-pointer"
										>
											<svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
											>
												<path
													d="M4 4l8 8M4 12L12 4"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
												/>
											</svg>
										</button>
										<div className="flex items-center gap-2 mb-2 flex-wrap">
											<Badge variant="active">受付中</Badge>
											<Badge>{selectedSubsidy.category}</Badge>
											{selectedSubsidy.regions.slice(0, 3).map((r) => (
												<span
													key={r}
													className="text-xs px-2 py-0.5 rounded bg-[var(--glass-bg)] text-[var(--text-dim)] border border-[var(--glass-border)]"
												>
													{r}
												</span>
											))}
										</div>
										<h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
											{selectedSubsidy.title}
										</h3>
										<div className="flex items-baseline gap-3">
											<span className="text-xl font-bold text-[var(--accent)]">
												{formatYen(selectedSubsidy.subsidyMaxLimit)}
											</span>
											{selectedSubsidy.subsidyRate && (
												<span className="text-xs text-[var(--text-dim)]">
													補助率 {selectedSubsidy.subsidyRate}
												</span>
											)}
										</div>
									</GlowCard>
								</div>
							)}
						</Card>
					</ScrollReveal>

					{/* Step 2: 申請情報入力 */}
					<ScrollReveal>
						<Card className="mb-6">
							<h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
								<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--accent)] text-[#0a0e17] text-sm font-bold mr-2">
									2
								</span>
								申請情報を入力
							</h2>

							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
										事業概要（何をやるか）
										<span className="text-red-400 ml-1">*</span>
									</label>
									<textarea
										rows={3}
										value={form.businessOverview}
										onChange={(e) =>
											handleFormChange("businessOverview", e.target.value)
										}
										placeholder="例：地域の空き家をリノベーションして、リモートワーカー向けのコワーキングスペースを開設する"
										className="w-full rounded-lg p-3 text-sm bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--border-accent)] transition-colors resize-none"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
										事業の目的・背景
										<span className="text-red-400 ml-1">*</span>
									</label>
									<textarea
										rows={3}
										value={form.purpose}
										onChange={(e) =>
											handleFormChange("purpose", e.target.value)
										}
										placeholder="例：地方の人口減少・空き家増加問題を解決しつつ、デジタル人材の地方移住を促進する"
										className="w-full rounded-lg p-3 text-sm bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--border-accent)] transition-colors resize-none"
									/>
								</div>

								<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
									<div>
										<label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
											業種
											<span className="text-red-400 ml-1">*</span>
										</label>
										<input
											type="text"
											value={form.industry}
											onChange={(e) =>
												handleFormChange("industry", e.target.value)
											}
											placeholder="例：不動産業"
											className="w-full rounded-lg p-3 text-sm bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--border-accent)] transition-colors"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
											従業員数
										</label>
										<input
											type="text"
											value={form.employees}
											onChange={(e) =>
												handleFormChange("employees", e.target.value)
											}
											placeholder="例：5名"
											className="w-full rounded-lg p-3 text-sm bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--border-accent)] transition-colors"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
											所在地
										</label>
										<input
											type="text"
											value={form.location}
											onChange={(e) =>
												handleFormChange("location", e.target.value)
											}
											placeholder="例：東京都渋谷区"
											className="w-full rounded-lg p-3 text-sm bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--border-accent)] transition-colors"
										/>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
										予算計画（概算）
									</label>
									<textarea
										rows={2}
										value={form.budget}
										onChange={(e) =>
											handleFormChange("budget", e.target.value)
										}
										placeholder="例：設備費 500万円、人件費 300万円、外注費 200万円　合計 1,000万円"
										className="w-full rounded-lg p-3 text-sm bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--border-accent)] transition-colors resize-none"
									/>
								</div>
							</div>
						</Card>
					</ScrollReveal>

					{/* Generate button */}
					<ScrollReveal>
						<div className="mb-6">
							<Button
								size="lg"
								className="w-full"
								disabled={!canGenerate}
								onClick={handleGenerate}
								icon={
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
									</svg>
								}
							>
								プロンプトを生成する
							</Button>
							{!canGenerate && (
								<p className="text-xs text-[var(--text-dim)] mt-2 text-center">
									補助金の選択と、事業概要・目的・業種の入力が必要です
								</p>
							)}
						</div>
					</ScrollReveal>

					{/* Step 3: Generated prompt */}
					{generatedPrompt && (
						<ScrollReveal>
							<Card className="mb-6">
								<h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
									<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--accent)] text-[#0a0e17] text-sm font-bold mr-2">
										3
									</span>
									生成されたプロンプト
								</h2>

								<div className="relative">
									<textarea
										readOnly
										rows={16}
										value={generatedPrompt}
										className="w-full rounded-lg p-4 text-sm bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-primary)] font-mono leading-relaxed resize-none focus:outline-none"
									/>
								</div>

								<div className="flex flex-col sm:flex-row gap-3 mt-4">
									<Button
										size="md"
										onClick={handleCopy}
										icon={
											copied ? (
												<svg
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<polyline points="20 6 9 17 4 12" />
												</svg>
											) : (
												<svg
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<rect
														x="9"
														y="9"
														width="13"
														height="13"
														rx="2"
														ry="2"
													/>
													<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
												</svg>
											)
										}
										className="flex-1"
									>
										{copied ? "コピーしました！" : "プロンプトをコピー"}
									</Button>

									<Button
										variant="outline"
										size="md"
										onClick={() => {
											handleCopy();
											window.open("https://chatgpt.com/", "_blank");
										}}
										className="flex-1"
									>
										ChatGPTで使う →
									</Button>

									<Button
										variant="outline"
										size="md"
										onClick={() => {
											handleCopy();
											window.open("https://claude.ai/", "_blank");
										}}
										className="flex-1"
									>
										Claudeで使う →
									</Button>
								</div>

								<p className="text-xs text-[var(--text-dim)] mt-3">
									上のプロンプトをコピーして、ChatGPTやClaudeに貼り付けてください。AIが補助金の審査基準に合わせた申請書を生成します。
								</p>
							</Card>
						</ScrollReveal>
					)}
				</div>
			</main>
		</>
	);
}
