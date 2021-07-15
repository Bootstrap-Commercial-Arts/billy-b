//import { createClient } from 'sanity-codegen';
//import type { Documents } from '../types/sanityTypes';
//import fetch from 'node-fetch'

//export default createClient<Documents>({
//  projectId: 'process.env.SANITY_PROJECT_ID',
//  dataset: 'production',
//  //apiVersion: ,
//  fetch: fetch,
//  previewMode: true,
//  token: ' ',
//  useCdn: true,
//});

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

type Client = {
  projectId: string,
  dataset: string,
  token: string,
  apiVersion: string,
  useCdn: boolean
}

const options:Client = {
  //your project ID
  projectId: 'dp45lesu',
  //your dataset; defaults to production
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: '',
  useCdn: true
}

const client = sanityClient( options )

const builder = imageUrlBuilder(client)

const urlFor = source => {
  return builder.image(source)
}

export { client, urlFor }