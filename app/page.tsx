import {
    Container,
    Title,
    TopBar,
    Filters,
    ProductsGroupList,
} from "@/components/shared";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>

            <TopBar />

            <Container className="pb-14 mt-10">
                <div className="flex gap-[80px]">
                    {/* Фильтрация */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    {/* Список продуктов */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                title={"Пиццы"}
                                items={[
                                    {
                                        id: 1,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                    {
                                        id: 2,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                    {
                                        id: 3,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                    {
                                        id: 4,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                    {
                                        id: 5,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                    {
                                        id: 6,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                ]}
                                categoryId={1}
                            />
                            
                            <ProductsGroupList
                                title={"Комбо"}
                                items={[
                                    {
                                        id: 1,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                    {
                                        id: 2,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                    {
                                        id: 3,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                    {
                                        id: 4,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                    {
                                        id: 5,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                    {
                                        id: 6,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                ]}
                                categoryId={2}
                            />

                            <ProductsGroupList
                                title={"Закуски"}
                                items={[
                                    {
                                        id: 1,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                    {
                                        id: 2,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                    {
                                        id: 3,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                    {
                                        id: 4,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                    {
                                        id: 5,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                    {
                                        id: 6,
                                        name: "Сырный цыпленок",
                                        description:
                                            "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                                        price: 395,
                                        imageUrl: "/pizza-img.png",
                                    },
                                ]}
                                categoryId={3}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
