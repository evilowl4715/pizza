"use client";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { Input } from "../ui";
import { RangeSlider } from "../ui/range-slider";
import {
    CheckboxFiltersGroup,
    FilterCheckbox,
    Title,
} from "@/components/shared";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom: number;
    priceTo: number;
}

export const Filters = ({ className, ...props }: Props) => {
    const { ingredientsAll, loading, onAddId, selectedIds } =
        useFilterIngredients();

    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));

    const [pizzaDough, { toggle: togglePizzaDough }] = useSet(new Set<string>([]));

    const [prices, setPrice] = useState<PriceProps>({
        priceFrom: 0,
        priceTo: 1000,
    });

    const ingredients = ingredientsAll.map((item) => ({
        value: String(item.id),
        text: item.name,
    }));

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]: value,
        });
    };

    useEffect(() => {
        console.log({prices, pizzaDough, sizes, selectedIds})
    },[prices, pizzaDough, sizes, selectedIds])

    return (
        <div className={className} {...props}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <CheckboxFiltersGroup
                title="Тип теста:"
                className="mt-5"
                items={[
                    {text: 'Тонкое', value: '1'},
                    {text: 'Традиционное', value: '2'},
                ]}
                loading={loading}
                onClickCheckbox={togglePizzaDough}
                selectedIds={pizzaDough}
                name="pizzaDough"
            />

            <CheckboxFiltersGroup
                title="Размер:"
                className="mt-5"
                items={[
                    {text: '20 см', value: '20'},
                    {text: '30 см', value: '30'},
                    {text: '40 см', value: '40'},
                ]}
                loading={loading}
                onClickCheckbox={toggleSizes}
                selectedIds={sizes}
                name="sizes"
            />

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        value={String(prices.priceFrom)}
                        onChange={(e) =>
                            updatePrice("priceFrom", Number(e.target.value))
                        }
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                        value={String(prices.priceTo)}
                        onChange={(e) =>
                            updatePrice("priceTo", Number(e.target.value))
                        }
                    />
                </div>

                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[prices.priceFrom, prices.priceTo]}
                    onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
                />
            </div>

            <CheckboxFiltersGroup
                title="Ингредиенты:"
                className="mt-5"
                limit={6}
                defaultItems={ingredients.slice(0, 6)}
                items={ingredients}
                loading={loading}
                onClickCheckbox={onAddId}
                selectedIds={selectedIds}
                name="ingredients"
            />
        </div>
    );
};
