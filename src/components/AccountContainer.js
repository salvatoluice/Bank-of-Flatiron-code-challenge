import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({
	transactions,
	handleAddTransaction,
	handleSearch,
	handleDeleteTransaction,
}) {
	return (
		<div>
			<Search handleSearch={handleSearch} />
			<AddTransactionForm
				handleAddTransaction={handleAddTransaction}
				transactions={transactions}
			/>
			<TransactionsList
				transactions={transactions}
				handleDeleteTransaction={handleDeleteTransaction}
			/>
		</div>
	);
}

export default AccountContainer;