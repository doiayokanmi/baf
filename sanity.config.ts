import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { gallery, project, speeches } from './sanity/schema/projectSchema'

const config = defineConfig({
    projectId: 'ec7o9bmp',
    dataset: 'production',
    title: 'BAF Project',
    apiVersion: '2023-10-23',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: [project, speeches, gallery]},
})

export default config