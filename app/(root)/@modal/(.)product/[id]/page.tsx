import {
    Container,
    ProductImage,
    Title,
    GroupVariants,
    ChooseProductModal,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductMidalPage({
    params: { id },
}: {
    params: { id: string };
}) {
    const product = await prisma.product.findFirst({
        where: { id: Number(id) },
        include: {
            ingredients: true,
            variationProduct: true,
        },
    });

    if (!product) {
        return notFound();
    }

    return (
        <ChooseProductModal product={product}></ChooseProductModal>
        // <Container className="flex flex-col my-10">
            // <div className="flex flex-1">
            //     <ProductImage size={40} imageUrl={product.imageUrl} />

            //     <div className="w-[490px] bg-[#f7f6f5] p-7">
            //         <Title
            //             text={product.name}
            //             size="md"
            //             className="font-extrabold mb-1"
            //         />

            //         <p className="text-gray-400">
            //             Lorem ipsum dolor, sit amet consectetur adipisicing
            //             elit. Quasi, quod.
            //         </p>
            //         <GroupVariants
            //             selectedValue="30"
            //             items={[
            //                 { name: "Маленькая", value: "30" },
            //                 { name: "Средняя", value: "40", disabled: true },
            //                 { name: "Большая", value: "50" },
            //             ]}
            //         />
            //     </div>
            // </div>
        // </Container>
    );
}
