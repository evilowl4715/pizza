"use client";
import { ProductCard, Title } from "@/components/shared";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React, { useEffect } from "react";
import { useIntersection } from "react-use";

interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList = ({
    title,
    items,
    className,
    listClassName,
    categoryId,
    ...props
}: Props) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title]);

    return (
        <div className={className} {...props} id={title} ref={intersectionRef}>
            <Title
                text={title}
                size="lg"
                className="font-extrabold mb-5"
            ></Title>

            <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
                {items.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        description="Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок"
                        price={390}
                    />
                ))}
            </div>
        </div>
    );
};
