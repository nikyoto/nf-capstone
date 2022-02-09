import React from "react";
import icons from "../../ions/icons";

const Icon = ({ icon, ...props }) => {
	return (
		<svg height={24} width={24} {...props} viewBox="0 0 24 24">
			<path fill="currentColor" d={icons[icon]} />
		</svg>
	);
};

export default Icon;
