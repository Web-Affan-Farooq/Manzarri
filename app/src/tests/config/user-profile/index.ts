import { test as base } from "@playwright/test";
import { token } from "@/constants";

const UserProfileTest = base.extend({
  context: async ({ context }, use) => {
    await context.addCookies([
      {
        name: token.user, // your real cookie name
        value:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJLdnBlb3ljbEd0N1dWd0hvWHFvRjRTIiwiZW1haWwiOiJhaG1lZGFiYmFzaTkwM0BnbWFpbC5jb20iLCJpYXQiOjE3NjA2MDg3Nzl9.sDgR3Sylk_jCbjPjMM01m38RJR_TuJgVrveZNEzNPwQ", // fake or seeded session value
        domain: "localhost",
        path: "/",
        httpOnly: true,
        sameSite: "Lax",
      },
    ]);
    await use(context);
  },
});
export default UserProfileTest;
