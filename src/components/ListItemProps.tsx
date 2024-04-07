import React, { useState } from "react";

interface ListItemProps {
	item: string;
	onRemove: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, onRemove }) => {
	const [hovered, setHovered] = useState(false);

	const handleHover = () => {
		setHovered(true);
		if (hovered) setHovered(false);
	};

	return (
		<li onMouseEnter={handleHover} onMouseLeave={() => setHovered(false)}>
			{item}
			{hovered && <button onClick={onRemove}>Remove</button>}
		</li>
	);
};

export default ListItem;
