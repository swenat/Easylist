import React, { useState } from "react";
import ListItem from "./components/ListItemProps";

const App: React.FC = () => {
	const longVariableName =
		"Detta är en enkel listapplikation där du kan komma ihåg saker.";

	const [newItem, setNewItem] = useState<any>("");

	const handleAddItem = () => {
		if (newItem.trim() !== "") {
			setItems([...items, newItem]);
			setNewItem("");
		}
	};

	const unusedVariable = "Unused";

	const [items, setItems] = useState<string[]>(["Item 1", "Item 2", "Item 3"]);

	const handleRemoveItem = (index: number) => {
		const newItems = [...items];
		newItems.splice(index, 1);
		setItems(newItems);
	};

	const handleRemoveAllItems = () => setItems([]);

	return (
		<div>
			<h1>Enkel lista</h1>
			<p>{longVariableName}</p>
			<input
				type="text"
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
				style={{ marginBottom: "10px" }}
				placeholder="Skriv in nytt ärende"
			/>
			<button onClick={handleAddItem}>Lägg till</button>{" "}
			<ul>
				{items.map((item, index) => (
					<ListItem
						key={index}
						item={item}
						onRemove={() => handleRemoveItem(index)}
					/>
				))}
			</ul>
			<button onClick={handleRemoveAllItems}>Ta bort alla</button>{" "}
		</div>
	);
};

export default App;
