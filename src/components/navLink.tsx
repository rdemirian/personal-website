import React from "react"
import Link from "next/link"

interface NavLinkProps {
	href: string
	currentPath: string
	children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ href, currentPath, children }) => {
	const isActive = currentPath === href

	return (
		<Link
			href={href}
			style={{
				textDecoration: "none",
				color: isActive ? "blue" : "inherit",
				fontWeight: isActive ? "bold" : "normal",
			}}
		>
			{children}
		</Link>
	)
}

export default NavLink
