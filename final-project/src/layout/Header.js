import { MobileHeader } from "./MobileHeader"
import { WebHeader } from "./WebHeader"


export const Header = ({ isMobile, categories, isTablet }) => {


    if (isMobile) {
        return <MobileHeader categories={categories.slice(0, 8)} />
    }
    return <WebHeader categories={categories.slice(0, 5)} isTablet={isTablet} />

}