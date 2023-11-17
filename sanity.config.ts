import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { gallery, projects, speeches } from './sanity/schema/projectSchema'

const config = defineConfig({
    projectId: 'ec7o9bmp',
    dataset: 'production',
    title: 'BAF Project',
    apiVersion: '2023-10-23',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: [projects, speeches, gallery]},
})

export default config