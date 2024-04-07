import React, { useState } from "react";

interface ListItemProps {
	item: string;
	onRemove: () => void;
	state: boolean; // Bulletproof React: Logik som inte är relaterad till render bör inte skrivas.
}
// Bulletproof React: Logik och rendering blandas här. Egentligen bör dessa separeras. Tex så skulle hover-statusen kunna kontrolleras utanför renderfunktionen och förändringen av state ske via en callback-function som ges som argument till useState

const ListItem: React.FC<ListItemProps> = ({ item, onRemove }) => {
	const [hovered, setHovered] = useState(false);

	// Bulletproof React: Direkt modifiering av state som görs genom att läsa från state-variabeln "hovered" direkt i samma funktion som uppdaterar den är generellt något som bör undvikas. Istället borde man använda en callback-funktion som ges som argument till useState för att uppdatera hovered baserat på dess nuvarande data

	const handleHover = () => {
		setHovered(true);
		if (hovered) setHovered(false); //se ovan
	};

	return (
		<li onMouseEnter={handleHover} onMouseLeave={() => setHovered(false)}>
			{item}
			{hovered && <button onClick={onRemove}>Remove</button>}
		</li>
	);
};

export default ListItem;
