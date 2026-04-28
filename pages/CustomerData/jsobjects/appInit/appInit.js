export default {
	init: async () => {
    await storeValue("role", undefined);

    const role =
      appsmith.user.email?.toLowerCase() === "ita.ta@fullsteam.online"
        ? "admin"
        : "user";

    await storeValue("role", role);
  }
}