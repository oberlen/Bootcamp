import { ROUTES } from "./common";

export type RootNavigation = {
    [ROUTES.MAIN]: undefined;
    [ROUTES.MESSAGEDETAIL]:{docId:string};

}
export type MainNavigation = {
    [ROUTES_MAIN.CREDIT_CARD]: undefined;
    [ROUTES_MAIN.MASSAGES]: undefined;
    [ROUTES_MAIN.GENERAL]: undefined;
}



export type RootNavigationProps = NavigationProp<RootNavigation>;
export type RootRouteProps<T extends keyof RootNavigation> = Route<
    T,
    RootNavigation[T]
>;
export type NavigationProps =MainNavigationProps;