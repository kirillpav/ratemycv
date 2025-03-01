"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import { User } from "@supabase/supabase-js";

export default function Profile() {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			setUser(user);
			setLoading(false);
		};

		fetchUser();

		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event, session) => {
				setUser(session?.user ?? null);
				setLoading(false);
			}
		);

		return () => {
			authListener.subscription.unsubscribe();
		};
	}, []);

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!user) {
		return null;
	}

	return (
		<div className="p-4">
			<h2 className="text-xl font-bold mb-4">Profile</h2>
			<p>Email: {user.email}</p>
			<button
				onClick={handleSignOut}
				className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
			>
				Sign Out
			</button>
		</div>
	);
}
