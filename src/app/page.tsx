"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import Auth from "@/components/Auth";
import Profile from "@/components/Profile";
import Image from "next/image";
import Button from "./_components/Button";
import NavBar from "./_components/NavBar";
import ReviewedBy from "./_components/ReviewedBy";
export default function Home() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userEmail, setUserEmail] = useState("");

	useEffect(() => {
		const checkAuth = async () => {
			const {
				data: { session },
			} = await supabase.auth.getSession();

			if (session) {
				setIsAuthenticated(true);
				setUserEmail(session.user.email || "");
			} else {
				setIsAuthenticated(false);
				setUserEmail("");
			}
		};

		checkAuth();
	}, []);

	return (
		<div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
			<NavBar isAuthenticated={isAuthenticated} userEmail={userEmail} />
			{/* Hero Section */}
			<div className="bg-[#193cf0] text-white rounded-4xl m-5 mt-24">
				<div className="container mx-auto px-6 py-20 text-center ">
					<h1 className="text-5xl font-bold mb-6">Rate My CV</h1>
					<p className="text-xl mb-8 max-w-2xl mx-auto">
						Get expert feedback on your CV and increase your chances of landing
						your dream job.
					</p>
					<Button onClick={() => alert("Get Started clicked")}>
						Get Started
					</Button>
				</div>
			</div>

			{/* Features Section */}
			<ReviewedBy />

			{/* CTA Section */}
		</div>
	);
}
