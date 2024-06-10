import Product from "./components/products/Product/Product";
import productsData from "./data/productsData";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-2xl font-bold">Mercado Pago Test Ecommerce</h1>
			<section className="w-full mt-3 flex justify-center rounded-lg">
				{productsData?.map((product) => (
					<Product
						key={product.title}
						image={product.image}
						title={product.title}
						price={product.price}
						inStock={product.inStock}
					/>
				))}
			</section>
		</main>
	);
}
