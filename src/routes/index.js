import Home from '~/page/Home';
import Shop from '~/page/Shop';
import Blog from '~/page/Blog'

// Public routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/shop', component: Shop},
    { path: '/blog', component: Blog},
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes };
