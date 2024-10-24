import { cn } from "@/lib/utils"
import { ReactNode } from "react";

interface Props {
    className?: string;
    children: ReactNode;
}


export const Container = ({className, children, ...props}:Props) => {
    return (
        <div className={cn('mx-auto max-w-[1280px]', className)} {...props}>{children}</div>
    )
}