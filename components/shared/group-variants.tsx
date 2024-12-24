'use client';
import { cn } from "@/lib/utils";

type Variant = {
    name: string;
    value: string;
    disabled?: boolean;
};

interface Props {
    items: readonly Variant[];
    onClick?: (value: Variant["value"]) => void;
    selectedValue?: Variant["value"];
    className?: string;
}

export const GroupVariants = ({
    items,
    onClick,
    className,
    selectedValue,
}: Props) => {
    return (
        <div
            className={cn(
                className,
                "flex justify-between bg-[#f3f3f7] rounded-3xl p-1 select-none"
            )}
        >
            {items.map((item) => (
                <button
                    key={item.name}
                    onClick={() => onClick?.(item.value)}
                    className={cn(
                        "flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm",
                        {
                            'bg-white shadow': item.value === selectedValue,
                            'text-gray-500 opacity-50 pointer-events-none': item.disabled
                        }
                    )}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
};