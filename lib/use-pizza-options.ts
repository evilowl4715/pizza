import { Variant } from "@/components/shared/group-variants";
import { PizzaSize, PizzaType } from "@/constans/pizza";
import { useEffect, useState } from "react";
import { useSet } from "react-use";
import { GetAvailablePizzaSizes } from "./get-available-pizza-sizes";
import { VariationProduct } from "@prisma/client";

interface ReturtProps {
    size: PizzaSize;
    type: PizzaType;
    selectedIngreidents: Set<number>;
    availableSizes: Variant[];
    setSize: (size: PizzaSize) => void;
    setType: (type: PizzaType) => void;
    addIngredient: (id: number) => void;
}

export const usePizzaOptions = (variationProduct: VariationProduct[]): ReturtProps => {
    const [size, setSize] = useState<PizzaSize>(20);
    const [type, setType] = useState<PizzaType>(1);
    const [selectedIngreidents, { toggle: addIngredient }] = useSet(
        new Set<number>([])
    );
    const availableSizes = GetAvailablePizzaSizes(variationProduct, type);

    useEffect(() => {
        const isAvailableSize = availableSizes?.find(
            (item) => Number(item.value) === size && !item.disabled
        );

        const availableSize = availableSizes?.find(
            (item) => !item.disabled
        );

        if (!isAvailableSize && availableSize) {
            setSize(Number(availableSize.value) as PizzaSize);
        }
    }, [type]);

    return { size, type, setSize, selectedIngreidents, addIngredient, setType, availableSizes };
};