"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChooseProductForm } from "../choose-product-form";
import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm } from "../choose-pizza-form";

interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal = ({ product, className }: Props) => {
    const [isOpen, setIsOpen] = useState(Boolean(product));
    const router = useRouter();
    const isPizzaForm = Boolean(product.variationProduct[0].pizzaType);

    useEffect(() => {
        setIsOpen(Boolean(product));
    }, [product]);

    const handleClose = () => {
        setIsOpen(false);
        router.back(); // Возвращаемся назад
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent
                className={cn(
                    "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
                    className
                )}
            >
                {isPizzaForm ? (
                    <ChoosePizzaForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                        ingredients={product.ingredients}
                        variationProduct={product.variationProduct}
                    />
                ) : (
                    <ChooseProductForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                    />
                )}

                {/* <ChoosePizzaForm
                    imageUrl={product.imageUrl}
                    name={product.name}
                    ingredients={product.ingredients}
                    variationProduct={product.variationProduct}
                /> */}
            </DialogContent>
        </Dialog>
    );
};
