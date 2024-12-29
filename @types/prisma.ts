import { Ingredient, Product, VariationProduct } from "@prisma/client";

export type ProductWithRelations = Product & { variationProduct: VariationProduct[]; ingredients: Ingredient[] };