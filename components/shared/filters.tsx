import { Input } from "../ui";
import { RangeSlider } from "../ui/range-slider";
import { CheckboxFiltersGroup, FilterCheckbox, Title } from "@/components/shared";

interface Props {
    className?: string;
}

export const Filters = ({ className, ...props }: Props) => {
    return (
        <div className={className} {...props}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        defaultValue={0}
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                        defaultValue={500}
                    />
                </div>

                <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
            </div>

            <CheckboxFiltersGroup
                title="Ингредиенты:"
                className="mt-5"
                limit={2}
                defaultItems={[
                    {
                        text: "Сырный соус",
                        value: "1",
                    },
                    {
                        text: "Моцарелла",
                        value: "2",
                    },
                    {
                        text: "Чеснок",
                        value: "3",
                    },
                    {
                        text: "Солёные огурчики",
                        value: "4",
                    },
                    {
                        text: "Красный лук",
                        value: "5",
                    },
                    {
                        text: "Томаты",
                        value: "6",
                    },
                ]}
                items={[
                    {
                        text: "Сырный соус",
                        value: "1",
                    },
                    {
                        text: "Моцарелла",
                        value: "2",
                    },
                    {
                        text: "Чеснок",
                        value: "3",
                    },
                    {
                        text: "Солёные огурчики",
                        value: "4",
                    },
                    {
                        text: "Красный лук",
                        value: "5",
                    },
                    {
                        text: "Томаты",
                        value: "6",
                    },
                ]}
            />
        </div>
    );
};