module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/buttons',
                permanent: true,
            },
        ]
    },
}