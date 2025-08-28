export const seo = ({
  title,
  description,
  keywords,
  image,
  googleSiteVerification,
}: {
  title: string
  description?: string
  image?: string
  keywords?: string
  googleSiteVerification?: string
}) => {
  const tags = [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    googleSiteVerification
      ? { name: 'google-site-verification', content: googleSiteVerification }
      : undefined,
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: '@tannerlinsley' },
    { name: 'twitter:site', content: '@tannerlinsley' },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    ...(image
      ? [
          { name: 'twitter:image', content: image },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'og:image', content: image },
        ]
      : []),
  ]

  // Filter out any undefined entries
  return tags.filter(Boolean) as { name?: string; content?: string; title?: string }[]
}
