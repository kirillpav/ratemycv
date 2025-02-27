import Link from "next/link";
import React from "react";
import { User } from "lucide-react";

const NavBar: React.FC = () => {
	return (
		<div className="fixed top-5 left-1/2 -translate-x-1/2 w-1/2 z-50">
			<nav className="bg-[#193cf0]/30 backdrop-blur-md border border-[#193cf0]/30 shadow-lg rounded-full px-6 z-50">
				<div className="flex justify-between items-center">
					<div className="flex items-center py-3 px-2">
						<Link
							className="text-white hover:underline transition-all duration-300"
							href="/"
						>
							Home
						</Link>
					</div>
					<div className="flex items-center py-3 px-2">
						<Link
							className="text-white hover:underline transition-all duration-300 "
							href="/about"
						>
							About
						</Link>
					</div>
					<div className="flex items-center py-3 px-2">
						<Link
							className="text-white hover:underline transition-all duration-300 "
							href="/contact"
						>
							Contact
						</Link>
					</div>
					<div className="flex items-center py-3 px-2">
						<Link
							className="text-white hover:underline transition-all duration-300"
							href="/pricing"
						>
							Pricing
						</Link>
					</div>

					<div className="flex items-center py-3 px-2">
						<Link
							className="text-white hover:underline transition-all duration-300 flex items-center gap-2"
							href="/signup"
						>
							<User className="w-4 h-4" />
							Create Account
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
