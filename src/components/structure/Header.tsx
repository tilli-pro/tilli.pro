import { forwardRef } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const NavListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    titleClassName?: string;
    liClassName?: string;
    noChildrenWrapper?: boolean;
  }
>(
  (
    {
      className,
      title,
      children,
      liClassName,
      titleClassName,
      noChildrenWrapper,
      ...props
    },
    ref,
  ) => {
    return (
      <li className={liClassName}>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
              className,
            )}
            {...props}
          >
            {!!title && (
              <div
                className={cn(
                  "text-sm leading-none font-medium",
                  titleClassName,
                )}
              >
                {title}
              </div>
            )}
            {noChildrenWrapper && children}
            {!noChildrenWrapper && (
              <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                {children}
              </p>
            )}
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);

NavListItem.displayName = "NavListItem";

const navMenuTriggerStyle = cn(
  "group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-10 w-max cursor-pointer items-center justify-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
);

const Header: React.FC = () => {
  return (
    <header className="bg-background/50 sticky top-0 flex w-full items-center justify-center backdrop-blur">
      <div className="flex h-20 w-full max-w-4xl flex-row items-center justify-center gap-9">
        <div className="flex items-start gap-[6px]">
          <Image
            src={"/tilli_logo_raster.png"}
            alt="tilli"
            width="36"
            height="36"
          />
          <h1 className="font-heading text-3xl font-medium">tilli</h1>
        </div>
        <NavigationMenu aria-label="Career Navigation" className="mx-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navMenuTriggerStyle}>
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[500px]">
                asdf
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navMenuTriggerStyle}>
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[500px]">
                asdf
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navMenuTriggerStyle}>
                Developers
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[500px]">
                asdf
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navMenuTriggerStyle}>
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[500px]">
                asdf
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-end gap-[6px]">
          <div>Book A Demo</div>
          <div>Sign In {"->"}</div>
        </div>
      </div>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
