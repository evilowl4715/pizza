import { Ingredient, VariationProduct } from "@prisma/client";
import { CalcTotalPizzaPrice } from "./calc-total-pizza-price";
import { mapPizzaType, PizzaSize, PizzaType } from "@/constans/pizza";

export const GetPizzaDetails = (
    variationProduct: VariationProduct[], 
    ingredients: Ingredient[], 
    selectedIngreidents: Set<number>, 
    size: PizzaSize, 
    type: PizzaType
) => {
    const totalPrice = CalcTotalPizzaPrice(type, size, variationProduct, ingredients, selectedIngreidents);
    const textDetaills = `${size} см, ${mapPizzaType[type]} тесто`;

    return { totalPrice, textDetaills };
};