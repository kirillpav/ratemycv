import Link from "next/link";
import React from "react";
import { User, LogOut } from "lucide-react";

interface NavBarProps {
	isAuthenticated?: boolean;
	userEmail?: string;
}

const NavBar: React.FC<NavBarProps> = ({ isAuthenticated, userEmail }) => {
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
							href="/contact"
						>
							Contact
						</Link>
					</div>

					{!isAuthenticated ? (
						<>
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
									className="text-white hover:underline transition-all duration-300"
									href="/pricing"
								>
									Pricing
								</Link>
							</div>
							<div className="flex items-center py-3 px-2">
								<Link
									className="text-white hover:underline transition-all duration-300 flex items-center gap-2"
									href="/sign-up"
								>
									<User className="w-4 h-4" />
									Create Account
								</Link>
							</div>
						</>
					) : (
						<>
							<div className="flex items-center py-3 px-2">
								<Link
									className="text-white hover:underline transition-all duration-300"
									href="/dashboard"
								>
									Dashboard
								</Link>
							</div>
							<div className="flex items-center py-3 px-2">
								<Link
									className="text-white hover:underline transition-all duration-300"
									href="/feed"
								>
									Rate CV's
								</Link>
							</div>
							<div className="flex items-center py-3 px-2">
								<button
									className="text-white hover:underline transition-all duration-300 flex items-center gap-2"
									onClick={() => {
										/* Add your logout handler here */
									}}
								>
									<LogOut className="w-4 h-4" />
									Logout
								</button>
							</div>
						</>
					)}
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
