"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import Auth from "@/components/Auth";
import Profile from "@/components/Profile";

export default function SignUp() {
	const [session, setSession] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchSession = async () => {
			const {
				data: { session },
			} = await supabase.auth.getSession();
			setSession(session);
			setLoading(false);
		};

		fetchSession();

		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event, session) => {
				setSession(session);
				setLoading(false);
			}
		);

		return () => {
			authListener.subscription.unsubscribe();
		};
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center min-h-screen">
				Loading...
			</div>
		);
	}

	return (
		<div>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
					<h1 className="text-4xl font-bold mb-8 text-center">
						My App with Supabase Auth
					</h1>

					{!session ? (
						<Auth />
					) : (
						<div className="flex flex-col items-center">
							<Profile />
						</div>
					)}
				</div>
			</main>
		</div>
	);
}
