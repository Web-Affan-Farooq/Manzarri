// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SANITY_PROJECT_PROJECT_ID: string;
    readonly VITE_SANITY_PROJECT_SANITY_DATASET: string;
    // Add other environment variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  