import { ROUTES_NAME } from './RoutesName';

export const ROUTES = [
    {
        path: ROUTES_NAME.HOME,
        exact: true,
        component: require('../../../pages/pg-home').default
    },
    {
        path: ROUTES_NAME.NOT_FOUND,
        exact: true,
        component: require('../../../pages/pg-not-found').default
    }
];