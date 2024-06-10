"use client";
import clsx from "clsx";
import { useState } from "react";

const BuyButton = ({ product }) => {
	const [loading, setLoading] = useState(false);

	const handleBuy = async () => {
		setLoading(true);

		try {
			const response = await fetch("/api/payment", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title: product.title,
					price: Number(product.price),
					image: product.image,
					quantity: 1,
				}),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(
					`Network response was not ok: ${response.status} ${response.statusText} - ${errorData.message}`
				);
			}

			const data = await response.json();

			console.log("Producto recibido del servidor:", data.id);
			//Redirige al usuario a mercadopago, para pagar el producto
			window.location.href = data.init_point;
		} catch (error) {
			console.error("Error:", error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<button
				className={clsx(
					"text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer",
					{
						"bg-gray-400 text-black": product.inStock === 0,
						"bg-blue-500 hover:bg-blue-700": product.inStock > 0,
					}
				)}
				onClick={handleBuy}
				disabled={product.inStock === 0 || loading}
			>
				{loading
					? "Cargando..."
					: product.inStock > 0
					? "Comprar"
					: "No disponible"}
			</button>
		</>
	);
};

export default BuyButton;
