export default {
	init: async () => {
		// prevent re-running
		if (appsmith.store.appInitialized) return;

		const role =
					appsmith.user.email?.toLowerCase() === "itaa.ta@fullsteam.online"
		? "admin"
		: "user";

		await storeValue("role", role);
		await storeValue("appInitialized", true);
	}
}