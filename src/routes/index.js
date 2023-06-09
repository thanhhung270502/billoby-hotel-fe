// Layouts
import { OnlyHeader } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Rooms from '~/pages/Rooms';
import ShowRoom from '~/pages/ShowRoom';
// import Product_Index from '~/pages/Product_Index';
import Test from '~/pages/Test';
import Upload from '~/pages/Upload';

// Không cần đăng nhập vẫn vào được
const publicRoutes = [
    // http://localhost:3000
    {
        path: '/',
        component: Home,
    },
    // http://localhost:3000/test
    {
        path: '/test',
        component: Test,
        layout: OnlyHeader,
    },
    // http://localhost:3000/upload
    {
        path: '/upload',
        component: Upload,
        layout: null,
    },
    // http://localhost:3000/rooms
    {
        path: '/rooms',
        component: Rooms,
    },
    // http://localhost:3000/rooms/:slug
    {
        path: '/rooms/:category',
        component: ShowRoom,
    },
];

// Sau khi đăng nhập với vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
