import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir:"./src/tests/pages",
    use: {
        baseURL:"http://localhost:3000",
        storageState:"storageState.json",
    }
})