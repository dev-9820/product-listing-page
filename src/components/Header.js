import {HamburgerIcon} from "@chakra-ui/icons";
import brand from '../images/brand.png'

const Header = () => {
    return(
        <div className=" flex h-28">
            <div className="bg-black w-20 h-20 content-center text-3xl text-center hover:bg-neutral-900 transition-all">
                <HamburgerIcon className="invert"/>
            </div>

            <img className="-translate-y-4 -translate-x-12" src={brand} alt="Brand-Logo"/>
            <div className="h-20 w-full flex justify-end">
                <div className="bg-black hover:bg-neutral-900 transition-all w-36 flex text-2xl p-5">
                    <h1 className="text-orange-400 mr-2 cursor-default">2</h1>
                    <h1 className="text-white cursor-default">in bag</h1>
                </div>

            </div>
        </div>
    )
}

export default Header