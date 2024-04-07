import React, { useState } from "react";
import ListItem from "./components/ListItemProps";

//Bulletproof React: Direktmanipulering av DOM-noden, dvs använder sig inte av Reacts virtuella DOM och state för att hantera uppdateringar på ett säkrare sätt. Något man bör undvika och istället använda sig av React state och props för att hantera tillstånd och rendering. Något som bidrar till en mer förutsägbar och underhållbar kodbas.
const App: React.FC = () => {
	const longVariableName = //ESLint: Här bryts regeln om att variabelnamn för vara beskrivande och tydliga för förståelse av koden. Det rekommenderas att ge variabler namn som speglar dess syfte och innehåll. I det här fallet skulle det egentligen behövt heta listDescription.
		"Detta är en enkel listapplikation där du kan komma ihåg saker.";

	const [newItem, setNewItem] = useState<any>(""); //Bulletproof React: Användning av "any-typen". Här skulle vi istället skrivit en typ tex: "string" eftersom newItem innehåller stränvärden enligt användningen i resten av koden. Any tillåter alla typer av värden vilket kan leda till oförutsägbart beteende och göra det svårt att upptäcka fel under kompileringstid.

	const handleAddItem = () => {
		if (newItem.trim() !== "") {
			setItems([...items, newItem]);
			setNewItem("");
		}
	};

	//ESLint: Deklaration av variabel som inte används. Antingen ge den ett namn som beskriver vad den berör och lägga till en funktion efter den eller ta bort den helt då den inte används och därmed inte fyller någon nytta
	const unusedVariable = "Unused";

	const [items, setItems] = useState<undefined[]>([
		//ESLint: Här används undefined som initialvärde för statevariablerna. Något som kan orsaka förvirring och oväntat beeende. Rätt kod skulle vara en specifik typ tex "string"
		"Item 1",
		"Item 2",
		"Item 3",
	]);

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
			<button style={{ marginTop: "10px" }} onClick={handleAddItem}>
				{" "}
				{/*ESLint: Användning av inline-stilar, något som anses vara dålig praxis då det kan vara svårare att återanvända samma stil på flera platser i koden.Rekommendationen är att ha en extern css-fil eller avnända ett stilsystem som css-moduler eller styled-components*/}
				Lägg till
			</button>{" "}
			{/* ESLint: Användning av button-elementet utan att specificera typen som i detta fall hade varit type="button" för att förtydliga beteendet för knappen*/}
			<ul>
				{items.map((item, index) => (
					<ListItem
						key={index}
						item={item} //Bulletproof react: Här borde man angett: item as a string för att göra koden mer förståelig så att Typescript vet vilken typ som förväntas
						onRemove={() => handleRemoveItem(index)}
					/>
				))}
			</ul>
			<button onClick={handleRemoveAllItems}>Ta bort alla</button>{" "}
		</div>
	);
};

export default App;
