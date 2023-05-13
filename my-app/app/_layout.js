import { Stack } from "expo-router"
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScrean from "expo-splash-screen";

SplashScrean.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    }); 

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded){
            await SplashScrean.hideAsync();
        }
    }, [fontsLoaded]) 

    if(!fontsLoaded) return null;
    return <Stack onLayout={onLayoutRootView}/>;
}

export default Layout