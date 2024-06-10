import Image from "next/image";
import BuyButton from "../BuyButton/BuyButton";

const Product = ({ image, title, price, inStock }) => {
	const product = { image, title, price, inStock };

	return (
		<div className="w-[300px] rounded-lg border border-gray-600 overflow-hidden shadow-lg m-4">
			<Image
				className="w-full object-cover h-[250px]"
				src={image}
				alt={title}
				width={800}
				height={800}
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{title}</div>
				<p className="text-gray-400 text-base">
					$
					{price.toFixed(2).toLocaleString("es-AR", {
						style: "currency",
						currency: "ARS",
					})}
				</p>
				<p
					className={`text-base ${
						inStock > 0 ? "text-green-500" : "text-red-500"
					}`}
				>
					{inStock > 0 ? `En Stock: ${inStock}` : "Agotado"}
				</p>
				<BuyButton product={product} />
			</div>
		</div>
	);
};

export default Product;
