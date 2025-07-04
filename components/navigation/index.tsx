import routes from "@/data/routes.json";

import BunqIcon from "../icons/bunq-icon";
import UserIcon from "../icons/user-icon";
import AddPropertyButton from "./add-property-button";
import NavigationItem, { type NavigationItemProps } from "./navigation-item";

const navigationItems: NavigationItemProps[] = routes.map((route) => ({
	label: route.label,
	href: route.href,
}));

export default function Navigation() {
	return (
		<nav className="pt-4 pb-6 flex items-center justify-around lg:pt-0 lg:pb-0 lg:h-[6.25rem]">
			<BunqIcon />

			<ul className="hidden lg:flex lg:items-center lg:gap-10">
				{navigationItems.map((navigationItem) => (
					<NavigationItem key={navigationItem.label} {...navigationItem} />
				))}
			</ul>

			<div className="flex items-center">
				<button
					type="button"
					className="pr-6 flex items-center gap-x-4 cursor-pointer"
				>
					<span className="hidden lg:block">
						<UserIcon />
					</span>

					<span className="text-gradient-primary font-medium">Sign In</span>
				</button>

				<AddPropertyButton />
			</div>
		</nav>
	);
}
