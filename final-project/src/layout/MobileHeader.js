import { UpperMobileHeader } from "./UpperMobileHeader";
import { BottomMobileNavigation } from "./BottomMobileNavigation";
import { useState } from "react";
import { SideNavigationBar } from "./SideNavigationBar";
import { Overlay } from "./Overlay";

export const MobileHeader = ({ pathname, categories }) => {

    pathname = pathname.split('/frontend-final-1')[1];

    const [isOverlayShown, setIsOverlayShown] = useState(false);

    return <>

        <UpperMobileHeader setIsOverlayShown={setIsOverlayShown} />
        {isOverlayShown && <SideNavigationBar setIsOverlayShown={setIsOverlayShown} categories={categories}  />}
        {isOverlayShown && <Overlay setIsOverlayShown={setIsOverlayShown} />}
        <BottomMobileNavigation pathname={pathname} />
    </>
}