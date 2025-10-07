import type { MetadataRoute } from 'next'
 
function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Manzarri',
    short_name: 'MN',
    description: 'A collective marketplace where luxury meet finess ',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/images/manzarri-logo.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
  }
}

export default manifest