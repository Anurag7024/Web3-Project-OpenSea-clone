import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'dhsuxxwg',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:'skOoMCee974PYQdmoIWwXGQA8JvPcpI7ajrAUflSTrXajdcRdY1oDwP2y68oac3u8Hd6Mco0HX3suTN9zcpJ4lZ2yV4I62nsPbWKzjkQxhcKPZhMyPnT86yDTif655RSvVklj5NbR6TR7xbQRYQ8QvUN1YhAJN7y0vMkej67iLi6YA6qO5M7',
    useCdn: false,
})