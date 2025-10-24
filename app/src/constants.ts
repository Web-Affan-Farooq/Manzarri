const pagesNotAllowed = [
    "/Admin",
    "/Admin/inventory",
    "/Admin/orders",
    "/Admin/accounts",
    "/Admin/settings",
    "/Admin/messages",
    "/Admin/events",
    "/Admin/finances",
]

const token = {
    admin:"manzarri-admin-authorization-token",
    user:"manzarri-authorization-token",
}

const urls = {
    dev:"http://localhost:3000",
    prod:"https://manzarri-ecommerce.vercel.app",
}
export {
    pagesNotAllowed,
    token,
    urls
}