import {
    Container,
    Title,
    TopBar,
    Filters,
    ProductCard,
} from "@/components/shared";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>

            <TopBar />

            <Container className="pb-14 mt-10">
                <div className="flex gap-[60px]">
                    {/* Фильтрация */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    {/* Список продуктов */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            {/* <ProductCard
                                id={1}
                                name="Сырный цыпленок"
                                description="Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок"
                                price={395}
                                imageUrl="/pizza-img.png"
                            /> */}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
