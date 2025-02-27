import React from "react";

interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg"
		>
			{children}
		</button>
	);
};

export default Button;
