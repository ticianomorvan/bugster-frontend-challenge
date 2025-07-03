import BunqIcon from "../icons/bunq-icon";
import UserIcon from "../icons/user-icon";

import routes from "@/data/routes.json"

import NavigationItem, { type NavigationItemProps } from "./navigation-item";
import AddPropertyButton from "./add-property-button";

const navigationItems: NavigationItemProps[] = routes.map((route) => ({
  label: route.label,
  href: route.href
}))

export default function Navigation() {
  return (
    <nav className="h-[6.25rem] flex items-center justify-around">
      <BunqIcon />

      <ul className="flex items-center gap-10">
        {navigationItems.map((navigationItem) => (
          <NavigationItem key={navigationItem.label} {...navigationItem} />
        ))}
      </ul>

      <div className="flex items-center">
        <button className="pr-6 flex items-center gap-x-4">
          <UserIcon />
          
          <span className="text-gradient-primary font-medium">
            Sign In
          </span>
        </button>

        <AddPropertyButton />
      </div>        
    </nav>
  )
}