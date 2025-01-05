import { PizzaSize, PizzaType } from "@/constans/pizza";
import { Ingredient, VariationProduct } from "@prisma/client";

/**
 *  Функция для вычисления общей стоимости пиццы
 * @param type - Тип выбранной пиццы
 * @param size - Размер выбранной пиццы
 * @param variationProduct - список вариаций
 * @param ingredients - список ингредиентов
 * @param selectedIngreidents - выбранные ингредиенты
 * 
 * @returns общаяя стоимость
 */

export const CalcTotalPizzaPrice = (
    type: PizzaType, 
    size: PizzaSize, 
    variationProduct:  
    VariationProduct[], 
    ingredients: Ingredient[],
    selectedIngreidents: Set<number>
) => {

    const pizzaPrice =
    variationProduct.find(
        (item) => item.pizzaType === type && item.size === size
    )?.price || 0;

    const totalIngredientsPrice = ingredients
        .filter((ingredient) => selectedIngreidents.has(ingredient.id))
        .reduce((acc, item) => acc + item.price, 0);

    return pizzaPrice + totalIngredientsPrice
}