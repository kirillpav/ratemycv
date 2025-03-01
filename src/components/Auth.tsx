"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabase";

export default function Auth() {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [view, setView] = useState("sign-in"); // 'sign-in' or 'sign-up'

	const handleSignUp = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		const { error } = await supabase.auth.signUp({
			email,
			password,
		});

		if (error) {
			alert(error.message);
		} else {
			alert("Check your email for the confirmation link!");
			setView("sign-in");
		}

		setLoading(false);
	};

	const handleSignIn = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			alert(error.message);
		}

		setLoading(false);
	};

	const handleSignOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) alert(error.message);
	};

	return (
		<div className="flex flex-col items-center justify-center p-4">
			{view === "sign-in" ? (
				<div className="w-full max-w-md">
					<h1 className="text-2xl font-bold mb-4">Sign In</h1>
					<form onSubmit={handleSignIn} className="space-y-4">
						<div>
							<label className="block text-sm font-medium">Email</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
								required
							/>
						</div>
						<div>
							<label className="block text-sm font-medium">Password</label>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
								required
							/>
						</div>
						<button
							type="submit"
							disabled={loading}
							className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
						>
							{loading ? "Loading..." : "Sign In"}
						</button>
					</form>
					<p className="mt-4 text-center">
						Don't have an account?{" "}
						<button
							onClick={() => setView("sign-up")}
							className="text-blue-600 hover:text-blue-800"
						>
							Sign Up
						</button>
					</p>
				</div>
			) : (
				<div className="w-full max-w-md">
					<h1 className="text-2xl font-bold mb-4">Sign Up</h1>
					<form onSubmit={handleSignUp} className="space-y-4">
						<div>
							<label className="block text-sm font-medium">Email</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
								required
							/>
						</div>
						<div>
							<label className="block text-sm font-medium">Password</label>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
								required
							/>
						</div>
						<button
							type="submit"
							disabled={loading}
							className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
						>
							{loading ? "Loading..." : "Sign Up"}
						</button>
					</form>
					<p className="mt-4 text-center">
						Already have an account?{" "}
						<button
							onClick={() => setView("sign-in")}
							className="text-blue-600 hover:text-blue-800"
						>
							Sign In
						</button>
					</p>
				</div>
			)}
		</div>
	);
}
