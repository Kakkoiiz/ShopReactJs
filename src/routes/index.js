import config from '~/config';

import Home from '~/page/Home';
import Shop from '~/page/Shop';
import Blog from '~/page/Blog'
import contact from '~/page/Contact';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home},
    { path: config.routes.shop, component: Shop},
    { path: config.routes.blog, component: Blog},
    { path: config.routes.contact, component: contact},
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes };
