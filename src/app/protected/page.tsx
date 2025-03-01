"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";

export default function ProtectedPage() {
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const checkUser = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();

			if (!user) {
				router.push("/");
			} else {
				setUser(user);
			}

			setLoading(false);
		};

		checkUser();
	}, [router]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!user) {
		return null;
	}

	return (
		<div className="p-24">
			<h1 className="text-2xl font-bold mb-4">Protected Page</h1>
			<p>Welcome, {user.email}!</p>
			<p>This page is only accessible to authenticated users.</p>
		</div>
	);
}
