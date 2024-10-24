"use client";
import { ChangeEvent, useState } from "react";
import { Input } from "../ui";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";

type Item = FilterChecboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup = ({
    title,
    items,
    defaultItems,
    limit = 6,
    searchInputPlaceholder = "Поиск...",
    onChange,
    defaultValue,
    className,
    ...props
}: Props) => {
    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const list = showAll
        ? items.filter((item) =>
              item.text.toLowerCase().includes(searchValue.toLowerCase())
          )
        : defaultItems.slice(0, limit);

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className={className} {...props}>
            <p className="font-bold mb-3">{title}</p>

            {showAll && (
                <div className="mb-5">
                    <Input
                        placeholder={searchInputPlaceholder}
                        className="bg-gray-50 border-none"
                        onChange={onChangeSearchInput}
                    />
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        value={item.value}
                        text={item.text}
                        endAdornment={item.endAdornment}
                        checked={false}
                        onCheckedChange={(ids) => console.log(ids)}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div
                    className={
                        showAll ? "border-t border-t-neutral-100 mt-4" : ""
                    }
                >
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-primary mt-3"
                    >
                        {showAll ? "Скрыть" : "+ Показать все"}
                    </button>
                </div>
            )}
        </div>
    );
};
