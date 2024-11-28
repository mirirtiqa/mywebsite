import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"

  export default  function  NavBar(){
    
    
    return (

 
        <div className="flex justify-center items-center w-full py-4">
```<NavigationMenu className="text-blue">
    <NavigationMenuList>

        <NavigationMenuItem className="text-blue">
        <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
            </NavigationMenuLink>
        </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
        <Link href="/musings" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Musings
            </NavigationMenuLink>
        </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
        <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Get in touch 
            </NavigationMenuLink>
        </Link>
        </NavigationMenuItem>

    </NavigationMenuList>
</NavigationMenu>
</div>

);
}
  