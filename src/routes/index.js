// Layouts
import { DefaultLayout, BigLayout } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live'
import Register from '~/pages/Register'
import Tag from '~/pages/Tag';
import MusicPage from '~/pages/Music';

// config
import config from '~/config';

//Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.following, component: Following, layout: DefaultLayout },
    { path: config.routes.profile, component: Profile, layout: BigLayout },
    { path: config.routes.upload, component: Upload, layout: BigLayout },
    { path: config.routes.search, component: Search },
    { path: config.routes.live, component: Live, layout: DefaultLayout },
    { path: config.routes.register, component: Register, layout: DefaultLayout },
    { path: config.routes.tag, component: Tag, layout: BigLayout },
    { path: config.routes.music, component: MusicPage, layout: BigLayout },
]
export const privateRoutes = [

]