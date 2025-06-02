import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'manzarri',

  projectId: import.meta.env.VITE_SANITY_PROJECT_PROJECT_ID ? import.meta.env.VITE_SANITY_PROJECT_PROJECT_ID : "",
  dataset: import.meta.env.VITE_SANITY_PROJECT_SANITY_DATASET ? import.meta.env.VITE_SANITY_PROJECT_SANITY_DATASET : "",
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})