import Link from "next/link";

const PaymentResult = ({ searchParams }) => {
	const { status, payment_id } = searchParams;

	console.log("searchParams", searchParams);
	console.log("status", status);

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<div>
				{status === "approved" ? (
					<div className="flex flex-col gap-y-2 justify-center items-center mb-4">
						<h1 className="text-green-500 text-3xl">Pago aprobado</h1>
						<span className="font-medium">ID de Pago: {payment_id}</span>
						<p>Gracias por tu compra.</p>
					</div>
				) : (
					<div className="text-red-500">
						<h1>Pago fallido</h1>
						<p>Hubo un problema con tu pago. Por favor, inténtalo de nuevo.</p>
					</div>
				)}
			</div>
			<Link
				href="/"
				className="bg-blue-400 px-4 py-2 cursor-pointer hover:bg-blue-500 transition-all rounded-lg"
			>
				Ir a Home
			</Link>
		</div>
	);
};

export default PaymentResult;
