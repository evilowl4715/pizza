import { Variant } from "@/components/shared/group-variants";
import { mapPizzaSizes, PizzaType } from "@/constans/pizza";
import { VariationProduct } from "@prisma/client";


export const GetAvailablePizzaSizes = (
    variationProduct: VariationProduct[], 
    type: PizzaType 
): Variant[] => {

    const FilteredPizzasByType = variationProduct.filter(
        (item) => item.pizzaType === type
    );
    return mapPizzaSizes.map((item) => ({
        name: item.name,
        value: item.value,
        disabled: !FilteredPizzasByType.some(
            (pizza) => Number(pizza.size) === Number(item.value)
        ),
    }));
};