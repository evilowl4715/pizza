"use client";
import { cn } from "@/lib/utils";
import { ProductImage } from "./product-image";
import { Title } from "./title";
import { Button } from "../ui";
import { GroupVariants } from "./group-variants";
import {
    mapPizzaSizes,
    mapPizzaType,
    mapPizzaTypes,
    PizzaSize,
    PizzaType,
} from "@/constans/pizza";
import { useEffect, useState } from "react";
import { Ingredient, VariationProduct } from "@prisma/client";
import { IngredientItem } from "./ingredient-item";
import { useSet } from "react-use";
import { CalcTotalPizzaPrice } from "@/lib/calc-total-pizza-price";
import { GetAvailablePizzaSizes } from "@/lib/get-available-pizza-sizes";
import { usePizzaOptions } from "@/lib/use-pizza-options";
import { get } from "http";
import { GetPizzaDetails } from "@/lib/get-pizza-details";

interface Props {
    imageUrl: string;
    name: string;
    ingredients: Ingredient[];
    variationProduct: VariationProduct[];
    onClickAddCart?: VoidFunction;
    className?: string;
}

export const ChoosePizzaForm = ({
    name,
    imageUrl,
    ingredients,
    variationProduct,
    onClickAddCart,
    className,
}: Props) => {
    const {
        size,
        type,
        setSize,
        selectedIngreidents,
        addIngredient,
        setType,
        availableSizes,
    } = usePizzaOptions(variationProduct);

    const {totalPrice, textDetaills} = GetPizzaDetails(
        variationProduct,
        ingredients,
        selectedIngreidents,
        size,
        type
    );

    const handleClickAddCart = () => {
        onClickAddCart?.();
        console.log({
            size,
            type,
            ingredients: selectedIngreidents,
        });
    };

    return (
        <div className={cn(className, "flex flex-1")}>
            <div className="flex items-center justify-center flex-1 relative w-full">
                <ProductImage
                    imageUrl={imageUrl}
                    size={size}
                    className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
                />
            </div>
            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1" />
                <p className="text-gray-400">{textDetaills}</p>

                <div className="flex flex-col gap-4 mt-5">
                    <GroupVariants
                        items={availableSizes}
                        value={String(size)}
                        onClick={(value) => setSize(Number(value) as PizzaSize)}
                    />

                    <GroupVariants
                        items={mapPizzaTypes}
                        value={String(type)}
                        onClick={(value) => setType(Number(value) as PizzaType)}
                    />
                </div>

                <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
                    <div className="grid grid-cols-3 gap-3">
                        {ingredients.map((ingredient) => (
                            <IngredientItem
                                key={ingredient.id}
                                name={ingredient.name}
                                imageUrl={ingredient.imageUrl}
                                price={ingredient.price}
                                active={selectedIngreidents.has(ingredient.id)}
                                onClick={() => addIngredient(ingredient.id)}
                            />
                        ))}
                    </div>
                </div>

                <Button
                    onClick={handleClickAddCart}
                    className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
                >
                    Добавить в корзину за {totalPrice}
                </Button>
            </div>
        </div>
    );
};
