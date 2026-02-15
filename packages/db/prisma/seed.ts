import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const REGIONS = [
	{ name: "北海道", code: "01", area: "HOKKAIDO" as const },
	{ name: "青森県", code: "02", area: "TOHOKU" as const },
	{ name: "岩手県", code: "03", area: "TOHOKU" as const },
	{ name: "宮城県", code: "04", area: "TOHOKU" as const },
	{ name: "秋田県", code: "05", area: "TOHOKU" as const },
	{ name: "山形県", code: "06", area: "TOHOKU" as const },
	{ name: "福島県", code: "07", area: "TOHOKU" as const },
	{ name: "茨城県", code: "08", area: "KANTO" as const },
	{ name: "栃木県", code: "09", area: "KANTO" as const },
	{ name: "群馬県", code: "10", area: "KANTO" as const },
	{ name: "埼玉県", code: "11", area: "KANTO" as const },
	{ name: "千葉県", code: "12", area: "KANTO" as const },
	{ name: "東京都", code: "13", area: "KANTO" as const },
	{ name: "神奈川県", code: "14", area: "KANTO" as const },
	{ name: "新潟県", code: "15", area: "CHUBU" as const },
	{ name: "富山県", code: "16", area: "CHUBU" as const },
	{ name: "石川県", code: "17", area: "CHUBU" as const },
	{ name: "福井県", code: "18", area: "CHUBU" as const },
	{ name: "山梨県", code: "19", area: "CHUBU" as const },
	{ name: "長野県", code: "20", area: "CHUBU" as const },
	{ name: "岐阜県", code: "21", area: "CHUBU" as const },
	{ name: "静岡県", code: "22", area: "CHUBU" as const },
	{ name: "愛知県", code: "23", area: "CHUBU" as const },
	{ name: "三重県", code: "24", area: "KINKI" as const },
	{ name: "滋賀県", code: "25", area: "KINKI" as const },
	{ name: "京都府", code: "26", area: "KINKI" as const },
	{ name: "大阪府", code: "27", area: "KINKI" as const },
	{ name: "兵庫県", code: "28", area: "KINKI" as const },
	{ name: "奈良県", code: "29", area: "KINKI" as const },
	{ name: "和歌山県", code: "30", area: "KINKI" as const },
	{ name: "鳥取県", code: "31", area: "CHUGOKU" as const },
	{ name: "島根県", code: "32", area: "CHUGOKU" as const },
	{ name: "岡山県", code: "33", area: "CHUGOKU" as const },
	{ name: "広島県", code: "34", area: "CHUGOKU" as const },
	{ name: "山口県", code: "35", area: "CHUGOKU" as const },
	{ name: "徳島県", code: "36", area: "SHIKOKU" as const },
	{ name: "香川県", code: "37", area: "SHIKOKU" as const },
	{ name: "愛媛県", code: "38", area: "SHIKOKU" as const },
	{ name: "高知県", code: "39", area: "SHIKOKU" as const },
	{ name: "福岡県", code: "40", area: "KYUSHU" as const },
	{ name: "佐賀県", code: "41", area: "KYUSHU" as const },
	{ name: "長崎県", code: "42", area: "KYUSHU" as const },
	{ name: "熊本県", code: "43", area: "KYUSHU" as const },
	{ name: "大分県", code: "44", area: "KYUSHU" as const },
	{ name: "宮崎県", code: "45", area: "KYUSHU" as const },
	{ name: "鹿児島県", code: "46", area: "KYUSHU" as const },
	{ name: "沖縄県", code: "47", area: "OKINAWA" as const },
	{ name: "全国", code: "00", area: "NATIONWIDE" as const },
];

const CATEGORIES = [
	{ name: "設備投資", slug: "equipment" },
	{ name: "人材育成", slug: "training" },
	{ name: "IT導入", slug: "it" },
	{ name: "販路開拓", slug: "sales" },
	{ name: "研究開発", slug: "rnd" },
	{ name: "事業承継", slug: "succession" },
	{ name: "創業支援", slug: "startup" },
	{ name: "雇用・労働", slug: "employment" },
	{ name: "環境・エネルギー", slug: "environment" },
	{ name: "海外展開", slug: "overseas" },
	{ name: "その他", slug: "other" },
];

const INDUSTRIES = [
	{ name: "農業・林業", code: "A" },
	{ name: "漁業", code: "B" },
	{ name: "鉱業・採石業", code: "C" },
	{ name: "建設業", code: "D" },
	{ name: "製造業", code: "E" },
	{ name: "電気・ガス・水道業", code: "F" },
	{ name: "情報通信業", code: "G" },
	{ name: "運輸業・郵便業", code: "H" },
	{ name: "卸売業・小売業", code: "I" },
	{ name: "金融業・保険業", code: "J" },
	{ name: "不動産業", code: "K" },
	{ name: "学術研究・専門技術サービス業", code: "L" },
	{ name: "宿泊業・飲食サービス業", code: "M" },
	{ name: "生活関連サービス業・娯楽業", code: "N" },
	{ name: "教育・学習支援業", code: "O" },
	{ name: "医療・福祉", code: "P" },
	{ name: "サービス業（他に分類されないもの）", code: "R" },
];

async function main() {
	console.log("Seeding regions...");
	for (const region of REGIONS) {
		await prisma.region.upsert({
			where: { code: region.code },
			update: {},
			create: region,
		});
	}

	console.log("Seeding categories...");
	for (const category of CATEGORIES) {
		await prisma.subsidyCategory.upsert({
			where: { slug: category.slug },
			update: {},
			create: category,
		});
	}

	console.log("Seeding industries...");
	for (const industry of INDUSTRIES) {
		await prisma.industry.upsert({
			where: { code: industry.code },
			update: {},
			create: industry,
		});
	}

	console.log("Seed complete!");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
