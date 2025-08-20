export type Product = {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;
	category: string;
};

export const ProductsData: Product[] = [
	{
		id: 1,
		name: "Whey Protein Isolate",
		description:
			"High-quality whey isolate to support muscle recovery and lean mass.",
		image: "/src/assets/protein-1.jpeg",
		price: 39.99,
		category: "Protein",
	},
	{
		id: 2,
		name: "Whey Protein Blend",
		description:
			"Balanced blend for great taste and performance any time of day.",
		image: "/src/assets/protein-2.jpeg",
		price: 34.99,
		category: "Protein",
	},
	{
		id: 3,
		name: "Casein Protein",
		description: "Slow-digesting protein ideal before bed for overnight recovery.",
		image: "/src/assets/protein-3.jpeg",
		price: 36.5,
		category: "Protein",
	},
	{
		id: 4,
		name: "Grass-Fed Whey",
		description: "Premium grass-fed whey with clean ingredients.",
		image: "/src/assets/protein-4.jpeg",
		price: 44.0,
		category: "Protein",
	},
	{
		id: 5,
		name: "Vegan Protein",
		description: "Plant-based protein with complete amino acid profile.",
		image: "/src/assets/protein-5.jpeg",
		price: 32.0,
		category: "Protein",
	},
	{
		id: 6,
		name: "Creatine Monohydrate",
		description: "Micronized creatine for strength and power output.",
		image: "/src/assets/creatine-1.jpg",
		price: 19.99,
		category: "Creatine",
	},
	{
		id: 7,
		name: "Creatine HCL",
		description: "Highly soluble creatine HCL for easy mixing.",
		image: "/src/assets/creatine-2.jpg",
		price: 24.99,
		category: "Creatine",
	},
	{
		id: 8,
		name: "Buffered Creatine",
		description: "Gentle on the stomach with equal performance benefits.",
		image: "/src/assets/creatine-3.jpg",
		price: 22.5,
		category: "Creatine",
	},
	{
		id: 9,
		name: "Creatine Capsules",
		description: "Convenient capsules for on-the-go dosing.",
		image: "/src/assets/creatine-4.jpg",
		price: 21.0,
		category: "Creatine",
	},
	{
		id: 10,
		name: "Creatine + Beta-Alanine",
		description: "Performance blend for strength and endurance.",
		image: "/src/assets/creatine-5.jpg",
		price: 27.0,
		category: "Creatine",
	},
	{
		id: 11,
		name: "Multivitamin Complex",
		description: "Daily essential vitamins and minerals for overall health.",
		image: "/src/assets/vitamin-1.jpg",
		price: 14.99,
		category: "Vitamins",
	},
	{
		id: 12,
		name: "Vitamin C + Zinc",
		description: "Immune support formula with antioxidants.",
		image: "/src/assets/vitamin-2.jpg",
		price: 12.5,
		category: "Vitamins",
	},
	{
		id: 13,
		name: "Omega-3 Fish Oil",
		description: "EPA/DHA for heart and brain health.",
		image: "/src/assets/vitamin-3.jpg",
		price: 16.75,
		category: "Vitamins",
	},
	{
		id: 14,
		name: "Vitamin D3",
		description: "Supports bone health and immune function.",
		image: "/src/assets/vitamin-4.jpg",
		price: 9.99,
		category: "Vitamins",
	},
	{
		id: 15,
		name: "Magnesium Glycinate",
		description: "Highly bioavailable magnesium for relaxation and sleep.",
		image: "/src/assets/vitamin-5.jpg",
		price: 13.99,
		category: "Vitamins",
	},
];

