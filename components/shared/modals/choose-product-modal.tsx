"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChooseProductForm } from "../choose-product-form";

interface Props {
    product: Product;
    className?: string;
}

export const ChooseProductModal = ({ product, className }: Props) => {

    const [isOpen, setIsOpen] = useState(Boolean(product));
    const router = useRouter();

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
                <ChooseProductForm imageUrl={product.imageUrl} name={product.name} ingredients={[]} />
            </DialogContent>
        </Dialog>
    );
};
