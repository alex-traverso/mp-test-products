import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
	accessToken: process.env.MP_TOKEN_SECRET,
});

export async function POST(req, res) {
	try {
		const body = await req.json();

		const { title, image, price } = body;

		if (!title || !price || !image) {
			return new Response(
				JSON.stringify({ message: "Missing required fields." }),
				{ status: 400 }
			);
		}

		const preference = new Preference(client);

		const response = await preference.create({
			body: {
				items: [
					{
						id: title,
						title: title,
						unit_price: price,
						quantity: 1,
						picture_url: image,
					},
				],
				auto_return: "approved",
				back_urls: {
					success: "http://localhost:3000/paymentResult",
					failure: "http://localhost:3000/paymentResult",
					pending: "/",
				},
			},
		});
		console.log("Response from MercadoPago:", response);

		return new Response(JSON.stringify(response), { status: 200 });
	} catch (error) {
		console.error("MercadoPago Error:", error);
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		});
	}
}
