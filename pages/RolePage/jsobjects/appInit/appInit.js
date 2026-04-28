export default {
	init: async () => {
		await storeValue("role", undefined);

		const role =
					appsmith.user.email?.toLowerCase() === "ita.ta@fullsteam.online"
		? "admin"
		: "user";

		await storeValue("role", role);
	}
	,
	checkAccess() {
		if (appsmith.mode === "EDIT") {
			return;
		}

		if (appsmith.store.role === "admin") {
			showAlert("Access denied", "error");
			navigateTo("CustomerData");
		}
	}
};