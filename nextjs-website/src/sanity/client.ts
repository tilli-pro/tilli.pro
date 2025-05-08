import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: 'g7u8cmw2',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})
