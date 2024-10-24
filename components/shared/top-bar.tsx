import { cn } from "@/lib/utils";
import { Categories, Container, SortPopup } from "@/components/shared";

interface Props {
    className?: string;
}

export const TopBar = ({ className, ...props }: Props) => {
    return (
        <div
            className={cn(
                "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
                className
            )}
            {...props}
        >
            <Container className="flex items-center justify-between">
                <Categories className="mt-3" />
                <SortPopup />
            </Container>
        </div>
    );
};
