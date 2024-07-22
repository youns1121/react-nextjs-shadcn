"use client";

import * as React from "react";
import * as MenuPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const ItemFont = "font-medium text-sm"
const ItemClass = "pt-3"

const MenuRoot = React.forwardRef<
    React.ElementRef<typeof MenuPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof MenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <MenuPrimitive.Root ref={ref}
        className={cn("hidden md:block flex-col h-full border-slate-200 justify-start items-start gap-2 px-4 py-4", className)}
        {...props}
    >
        {children}
    </MenuPrimitive.Root>
));
MenuRoot.displayName = "MenuRoot";

const SubMenu = React.forwardRef<
    React.ElementRef<typeof MenuPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof MenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <MenuPrimitive.Root ref={ref}
        className={cn("hidden md:block flex-col h-full border-slate-200 justify-start items-start", className)} {...props}>
        {children}
    </MenuPrimitive.Root>
));
SubMenu.displayName = "SubMenu";

interface MenuItemProps {
    key: string
    label?: string
    type?: string
    icon?: React.ReactNode
    children?: MenuItemProps[]
    onTitleClick?: (e: MenuItemProps) => void
}

const MenuItem = React.forwardRef<
    React.ElementRef<typeof MenuPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof MenuPrimitive.Item>
>(({ className, ...props }, ref) => (
    <MenuPrimitive.Item ref={ref} className={cn(className)} {...props} />
));
MenuItem.displayName = "MenuItem";

const MenuTrigger = React.forwardRef<
    React.ElementRef<typeof MenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof MenuPrimitive.Trigger> & { type?: "single" | "accordion" }
>(({ className, children, type = "accordion", ...props }, ref) => (
    <MenuPrimitive.Header className="flex w-full">
        <MenuPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex w-full items-center gap-3 px-3 py-2 rounded-md text-left transition-all hover:bg-slate-100",
                ItemFont,
                {
                    "[&[data-state=open]>svg:last-child]:rotate-180": type === "accordion",
                },
                className
            )}
            {...props}
        >
            {children}
            {type === "accordion" && (
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 my-0 ml-auto" />
            )}
        </MenuPrimitive.Trigger>
    </MenuPrimitive.Header>
));
MenuTrigger.displayName = "MenuTrigger";

const MenuContent = React.forwardRef<
    React.ElementRef<typeof MenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof MenuPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <MenuPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-Menu-up data-[state=open]:animate-Menu-down"
        {...props}
    >
        <div className={cn("flex-col gap-3 pt-0", className)}>
            {children}
        </div>
    </MenuPrimitive.Content>
));
MenuContent.displayName = "MenuContent";

const MenuSingleItem = React.forwardRef<
    React.ElementRef<typeof MenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof MenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <MenuPrimitive.Trigger
        ref={ref}
        className={cn(
            "flex w-full items-center gap-3 px-3 py-2 rounded-md justify-between transition-all hover:bg-slate-100",
            ItemFont,
            className
        )}
        {...props}
    >
        {children}
    </MenuPrimitive.Trigger>
));
MenuSingleItem.displayName = "MenuSingleItem";

interface MenuItemsProps {
    item: MenuItemProps
    iconOnly: boolean
    defaultOpenKeys: Map<string, boolean>
    defaultClick?: (e: MenuItemProps) => void
    level: number
}

const SubMenuItems = React.forwardRef<HTMLDivElement, MenuItemsProps>(
    ({ item, iconOnly, defaultOpenKeys, defaultClick, level }, ref) => {
        let defaultValue: string | undefined;
        if (defaultOpenKeys.has(item.key)) defaultValue = item.key

        return (
            <SubMenu type="single" defaultValue={defaultValue} collapsible ref={ref}>
                <MenuItems item={item}
                    iconOnly={iconOnly}
                    defaultOpenKeys={defaultOpenKeys}
                    defaultClick={defaultClick}
                    level={level + 1}
                    ref={ref} />
            </SubMenu>
        )
    })
SubMenuItems.displayName = "SubMenuItems"

interface MenuItemPrintProps {
    iconOnly: boolean
    item: MenuItemProps
    level: number
}

const MenuItemPrint = React.forwardRef<HTMLDivElement, MenuItemPrintProps>(
    ({ item, iconOnly, level }, _) => {

        return (
            <div className={cn("flex gap-3", { "pl-4": level !== 0 }, { "font-bold": level === 0 })}>
                {item.icon}
                {!iconOnly && item.label}
            </div>
        )
    }
)
MenuItemPrint.displayName = "MenuItemPrint";

const MenuItems = React.forwardRef<HTMLDivElement, MenuItemsProps>(
    ({ item, iconOnly, defaultOpenKeys, defaultClick, level }, ref) => {
        let defaultValue: string | undefined
        if (defaultOpenKeys.has(item.key)) defaultValue = item.key
        return (
            <>
                {
                    item.children ?
                        <MenuItem value={item.key} ref={ref} className={ItemClass}>
                            <MenuTrigger defaultValue={defaultValue}>
                                <MenuItemPrint iconOnly={iconOnly} item={item} level={level} />
                            </MenuTrigger>
                            <MenuContent>
                                {item.children.map((item, index) => (
                                    <SubMenuItems key={index}
                                        iconOnly={iconOnly}
                                        defaultOpenKeys={defaultOpenKeys}
                                        item={item}
                                        level={level + 1}
                                        defaultClick={defaultClick} />
                                ))
                                }
                            </MenuContent>
                        </MenuItem>
                        :
                        <MenuItem className={ItemClass} value={item.key} ref={ref}>
                            <MenuSingleItem onClick={() => {
                                (item.onTitleClick && item.onTitleClick(item)) ||
                                    (defaultClick && defaultClick(item));
                            }}>
                                <MenuItemPrint iconOnly={iconOnly} level={level} item={item} />
                            </MenuSingleItem>

                        </MenuItem>
                }
            </>
        )
    })
MenuItems.displayName = "MenuItems";

// extend를 사용하여 DIVElment등을 사용할경우 accordion defaultValue 충돌이 발생하기 때문에 interface에 따로 필요사항만 등록

interface MenuProps {
    // tailwind css
    className?: string;
    // item click 시 수행할 handler 등록
    defaultClick?: (e: MenuItemProps) => void;
    /**
     * open 되어야할 item 목록
     */
    defaultOpenKeys?: string[];
    // icon 만 display
    iconOnly?: boolean;
    // menu item
    items: MenuItemProps[]
    // menu style
    style?: React.CSSProperties;
}

const Menu = React.forwardRef<
    HTMLDivElement,
    MenuProps>(
        ({
            className,
            defaultOpenKeys,
            items,
            iconOnly = false,
            defaultClick,
            ...props
        }, ref) => {
            const defaultOpenKeyMap = new Map<string, boolean>()
            defaultOpenKeys?.forEach((key) => {
                defaultOpenKeyMap.set(key, true)
            })

            let defaultValue: string | undefined
            const menuItems = items.map((item, index) => {
                if (defaultOpenKeyMap.has(item.key)) defaultValue = item.key
                return (
                    <MenuItems iconOnly={iconOnly}
                        key={index}
                        defaultClick={defaultClick}
                        defaultOpenKeys={defaultOpenKeyMap}
                        level={0}
                        item={item}
                        ref={ref}
                    />
                )
            })

            return (
                <MenuRoot type={"single"} defaultValue={defaultValue} className={cn(className)} collapsible {...props} >
                    {menuItems}
                </MenuRoot>
            )
        })
Menu.displayName = "Menu";

export type { MenuItemProps };
export { Menu };
