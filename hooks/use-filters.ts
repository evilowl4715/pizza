import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import { useState } from "react";

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

interface QueryFilters extends PriceProps {
    pizzaDough: string;
    sizes: string;
    ingredients: string;
}

export interface Filters {
    sizes: Set<string>;
    pizzaDough: Set<string>;
    selectedIngredients: Set<string>;
    prices: PriceProps;
}

interface ReturnProps extends Filters {
    setPrice: (name: keyof PriceProps, value: number) => void;
    setPizzaDough: (value: string) => void;
    setSelectedIngredients: (value: string) => void;
    setSizes: (value: string) => void;
}

export const useFilters = ():ReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<
        keyof QueryFilters,
        string
    >;

    // ФИЛЬТР ИНГЕДИЕНТОВ
    const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
        new Set<string>(searchParams.get("ingredients")?.split(","))
    );
    
    // ФИЛЬТР РАЗМЕРОВ
    const [sizes, { toggle: toggleSizes }] = useSet(
        new Set<string>(
            searchParams.get("sizes")
                ? searchParams.get("sizes")?.split(",")
                : []
        )
    );

    // ФИЛЬТР ТИП ПИЦЦЫ
    const [pizzaDough, { toggle: togglePizzaDough }] = useSet(
        new Set<string>(
            searchParams.get("pizzaDough")
                ? searchParams.get("pizzaDough")?.split(",")
                : []
        )
    );

    // ФИЛЬТР ЦЕНЫ

    const [prices, setPrice] = useState<PriceProps>({
        priceFrom: Number(searchParams.get("priceFrom")) || undefined,
        priceTo: Number(searchParams.get("priceTo")) || undefined,
    });

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return {
        sizes,
        setSizes: toggleSizes,
        pizzaDough,
        setPizzaDough: togglePizzaDough,
        selectedIngredients,
        setSelectedIngredients: toggleIngredients,
        prices,
        setPrice: updatePrice,
    }
};