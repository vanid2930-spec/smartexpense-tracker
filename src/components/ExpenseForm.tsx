import React, { useState } from "react";

interface Props {
  addExpense: (title: string, amount: number, category: string) => void;
}

function ExpenseForm({ addExpense }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return;

    addExpense(title, parseFloat(amount), category);
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "30px" }}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      >
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
      </select>
      <button type="submit" style={{ padding: "10px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
