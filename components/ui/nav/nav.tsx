import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,

} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Nav = () => {
    return (
        <nav className="flex items-center h-[40px] justify-center gap-4 text-sm lg:gap-6">
            <NavigationMenu className="flex items-center">
                <NavigationMenuList>
                    <NavigationMenuItem className="pr-2">
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink>
                                HOME
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="pr-2">
                        <Link href="/posts" legacyBehavior passHref>
                            <NavigationMenuLink>
                                POST
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="pr-2">
                        <Link href="/tables" legacyBehavior passHref>
                            <NavigationMenuLink>
                                TABLES
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="pr-2">
                        <Link href="/detail" legacyBehavior passHref>
                            <NavigationMenuLink>
                                DETAIL
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="pr-2">
                        <Link href="/example" legacyBehavior passHref>
                            <NavigationMenuLink>
                                EXAMPLE
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>

            </NavigationMenu>
        </nav>
    )
}

export default Nav;