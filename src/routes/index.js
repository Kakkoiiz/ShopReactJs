import Home from '~/page/Home';
import Shop from '~/page/Shop';
import Blog from '~/page/Blog'
import contact from '~/page/Contact';

// Public routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/shop', component: Shop},
    { path: '/blog', component: Blog},
    { path: '/contact', component: contact},
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes };
