export default {
  init: async () => {
    // reset properly
    await storeValue("role", null);
    await storeValue("appInitialized", false);

    // now logic runs
    const role =
      appsmith.user.email?.toLowerCase() === "ita.ta@fullsteam.online"
        ? "admin"
        : "user";

    await storeValue("role", role);
    await storeValue("appInitialized", true);

    console.log("role:", role);
  }
};