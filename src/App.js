import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';

const AboutMe = lazy(() => import('./pages/AboutMe'));
const ArtGallery = lazy(() => import('./pages/ArtGallery'));
const WebApps = lazy(() => import('./pages/WebApps'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <ScrollToTop />
                <Switch>
                    <Route path={ROUTES.ABOUT_ME} component={AboutMe} exact />
                    <Route path={ROUTES.ART_GALLERY} component={ArtGallery} />
                    <Route path={ROUTES.WEB_APPS} component={WebApps} />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </Router>
    );
}
