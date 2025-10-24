import { test as base } from "@playwright/test";
import { token } from "@/constants";

 const AdminPanelTest = base.extend({
  context: async ({ context }, use) => {
    await context.addCookies([
      {
        name: token.admin, // your real cookie name
        value:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJhYzJLZTJ4UjlrM2hNMjZ4RUZvVWhKIiwiZW1haWwiOiJhZmZhbmFtaXI5MDNAZ21haWwuY29tIiwiaWF0IjoxNzU5ODU4MTk0fQ.4mpzzugHs688Efz2grmJYevFkiMEMv7frxW10LqFBXk", // fake or seeded session value
        domain: "localhost",
        path: "/",
        httpOnly: true,
        sameSite: "Lax",
      },
    ]);
    await use(context);
  },
});
export default AdminPanelTest