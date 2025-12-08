import type { FC, ReactNode } from "react";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

import { Badge } from "./badge";

interface ShinyBadgeProps {
	children: ReactNode;
}

export const ShinyBadge: FC<ShinyBadgeProps> = ({ children }) => {
	return (
		<Badge
			size="lg"
			className="border light:border-transparent dark:border-border bg-badge hover:bg-badge w-fit mb-2"
			// className="border light:bg-transparent text-black border-custom dark:border-custom bg-transparent hover:bg-badge w-fit mb-2"
			// variant="custom"
		>
			<AnimatedShinyText className="text-xs flex gap-1 items-center">
				{children}
			</AnimatedShinyText>
		</Badge>
	);
};
