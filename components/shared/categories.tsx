'use client';

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { Category } from "@prisma/client";

interface Props {
    categories: Category[];
    className?: string;
}

export const Categories = ({ className, categories, ...props }: Props) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId)


    return (
        <div
            className={cn(
                "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
                className
            )}
            {...props}
        >
            {categories.map(({name, id}) => (
                <a
                    className={cn(
                        "flex items-center font-bold h-11 rounded-2xl px-5",
                        categoryActiveId == id &&
                            "bg-white shadow-md shadow-gray-200 text-primary"
                    )}
                    key={id}
                    href={`/#${name}`}
                >
                    <button>{name}</button>
                </a>
            ))}
        </div>
    );
};
