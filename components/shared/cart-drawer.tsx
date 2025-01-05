"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import React, { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { GetCartItemDetails } from "@/lib/get-cart-item-details";

interface Props {
    className?: string;
    children?: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CartDrawer = ({ children, className }: Props) => {
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee]">
                <SheetHeader>
                    <SheetTitle>
                        В корзине <span className="font-bold">3 товара</span>
                    </SheetTitle>
                </SheetHeader>

                <div className="-mx-6 mt-5 overflow-auto flex-1">
                    <div className="mb-2">
                        <CartDrawerItem
                            id={1}
                            imageUrl={
                                "http://localhost:3000/_next/image?url=https%3A%2F%2Fmedia.dodostatic.net%2Fimage%2Fr%3A233x233%2F11EE7D61304FAF5A98A6958F2BB2D260.webp&w=256&q=75"
                            }
                            details={GetCartItemDetails(2, 30, [
                                { name: "Цыпленок, моцарелла, сыры чеддер" },
                            ])}
                            name={"Пепперони Фреш"}
                            price={419}
                            quantity={1}
                        />
                    </div>
                    <div className="mb-2">
                        <CartDrawerItem
                            id={1}
                            imageUrl={
                                "http://localhost:3000/_next/image?url=https%3A%2F%2Fmedia.dodostatic.net%2Fimage%2Fr%3A233x233%2F11EE7D61304FAF5A98A6958F2BB2D260.webp&w=256&q=75"
                            }
                            details={GetCartItemDetails(2, 30, [
                                { name: "Цыпленок, моцарелла, сыры чеддер" },
                            ])}
                            name={"Пепперони Фреш"}
                            price={419}
                            quantity={1}
                        />
                    </div>
                </div>

                <SheetFooter className="-mx-6 bg-white p-8">
                    <div className="w-full">
                        <div className="flex mb-4">
                            <span className="flex flex-1 text-lg text-neutral-500">
                                Итого
                                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"></div>
                            </span>
                            <span className="font-bold text-lg">500 ₽</span>
                        </div>
                        <Link href="/cart">
                            <Button
                                // onClick={() => setRedirecting(true)}
                                // loading={loading || redirecting}
                                type="submit"
                                className="w-full h-12 text-base"
                            >
                                Оформить заказ
                                <ArrowRight className="w-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};
