"use client";
import { useFilters, useIngredients, useQueryFilters } from "@/hooks";
import { Input } from "../ui";
import { RangeSlider } from "../ui/range-slider";
import { CheckboxFiltersGroup, Title } from "@/components/shared";

interface Props {
    className?: string;
}

export const Filters = ({ className, ...props }: Props) => {
    const { ingredientsAll, loading } = useIngredients();
    const filters = useFilters();

    useQueryFilters(filters)

    const ingredients = ingredientsAll.map((item) => ({
        value: String(item.id),
        text: item.name,
    }));

    const updatePrices = (prices: number[]) => {
        filters.setPrice('priceFrom', prices[0])
        filters.setPrice('priceTo', prices[1])
    }

    return (
        <div className={className} {...props}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <CheckboxFiltersGroup
                title="Тип теста:"
                className="mt-5"
                items={[
                    { text: "Тонкое", value: "1" },
                    { text: "Традиционное", value: "2" },
                ]}
                loading={loading}
                onClickCheckbox={filters.setPizzaDough}
                selectedIds={filters.pizzaDough}
                name="pizzaDough"
            />

            <CheckboxFiltersGroup
                title="Размер:"
                className="mt-5"
                items={[
                    { text: "20 см", value: "20" },
                    { text: "30 см", value: "30" },
                    { text: "40 см", value: "40" },
                ]}
                loading={loading}
                onClickCheckbox={filters.setSizes}
                selectedIds={filters.sizes}
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
                        value={String(filters.prices.priceFrom)}
                        onChange={(e) =>
                            filters.setPrice("priceFrom", Number(e.target.value))
                        }
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                        value={String(filters.prices.priceTo)}
                        onChange={(e) =>
                            filters.setPrice("priceTo", Number(e.target.value))
                        }
                    />
                </div>

                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
                    onValueChange={updatePrices}
                />
            </div>

            <CheckboxFiltersGroup
                title="Ингредиенты:"
                className="mt-5"
                limit={6}
                defaultItems={ingredients.slice(0, 6)}
                items={ingredients}
                loading={loading}
                onClickCheckbox={filters.setSelectedIngredients}
                selectedIds={filters.selectedIngredients}
                name="ingredients"
            />
        </div>
    );
};
