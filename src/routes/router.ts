import bookRoutes from './book';
import genreRoutes from './genre';
import authorRoutes from './author';
import publisherRoutes from './publisher';
import authRoutes from './auth';
import rentRoutes from './rent';
import homeRoute from './home';

const routes = {
    homeRoute,
    bookRoutes,genreRoutes,authorRoutes,
    publisherRoutes,authRoutes,rentRoutes
};

export default routes;
