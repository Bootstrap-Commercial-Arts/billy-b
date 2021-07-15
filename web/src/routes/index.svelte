<script context=module lang=ts>
  import { client, urlFor } from '$utils/sanityClient'
  import groq from 'groq'

  export async function load({ page, fetch, session, context }){
    const query = groq`*[_type == 'siteSettings'][0]`

    const siteSettings = await client.fetch(query)

    return { 
      props: { 
        siteSettings,
        page
      }
    }
  }
</script>

<script lang=ts>
  import SvelteSeo from "svelte-seo";
  import type { SiteSettings } from '$types/sanityTypes'

  export let siteSettings:SiteSettings
  export let page

  $: ({ siteName, seoSettings: { seoTitle, seoMetaDescription, previewImage, previewImageAlt }} = siteSettings)
</script>

<svelte:head>
  <title>{ siteName }</title>
</svelte:head>

<SvelteSeo 
  openGraph={{
    title: seoTitle,
    description: seoMetaDescription,
    url: `https://${page.host}`,
    type: 'website',
    images: [
      {
        url: `${urlFor(previewImage)}`,
        width: 850,
        height: 650,
        alt: `${previewImageAlt}`
      }
    ]
  }}
/>
