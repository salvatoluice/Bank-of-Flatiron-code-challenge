import React from "react";

function AddTransactionForm({ handleAddTransaction }) {
	const [formData, setFormData] = React.useState({
		date: "",
		description: "",
		category: "",
		amount: null,
	});
	const handlePostTransaction = async (e) => {
		e.preventDefault();
		console.log(formData);
		try {
			const res = await fetch("http://localhost:8001/transactions", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					date: formData.date,
					description: formData.description,
					category: formData.category,
					amount: formData.amount,
				}),
			});
			const jsonRes = await res.json();
			handleAddTransaction(jsonRes);
			setFormData({
				date: "",
				description: "",
				category: "",
				amount: null,
			});
		} catch (err) {
			console.log(err);
		}
	};
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	return (
		<div className="ui segment">
			<form className="ui form" onSubmit={handlePostTransaction}>
				<div className="inline fields">
					<input
						type="date"
						name="date"
						value={formData.date}
						onChange={handleChange}
					/>
					<input
						type="text"
						value={formData.description}
						name="description"
						placeholder="Description"
						onChange={handleChange}
					/>
					<input
						type="text"
						value={formData.category}
						name="category"
						placeholder="Category"
						onChange={handleChange}
					/>
					<input
						type="number"
						value={formData.amount}
						name="amount"
						placeholder="Amount"
						step="0.01"
						onChange={handleChange}
					/>
				</div>
				<button className="ui button" type="submit">
					Add Transaction
				</button>
			</form>
		</div>
	);
}

export default AddTransactionForm;