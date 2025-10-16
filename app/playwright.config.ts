import { defineConfig } from "@playwright/test";

export default defineConfig({
    globalSetup:"./global-setup.ts",
    use: {
        baseURL:"http://localhost:3000",
        storageState:"storageState.json",
    }
})