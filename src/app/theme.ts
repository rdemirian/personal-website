import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
	config: {
		initialColorMode: "dark",
		useSystemColorMode: true,
	},
	styles: {
		global: (props: Record<string, any>) => ({
			body: {
				color: mode("#252425", "#FFFADD")(props),
				bg: mode("#FFFADD", "#252425")(props),
			},
		}),
	},
	colors: {
		brand: {
			light: "orange",
			dark: "#00ff9b",
		},
		textColor: {
			light: "#252425",
			dark: "#FFFADD",
		},
		bgColor: {
			light: "#FFFADD",
			dark: "#252425",
		},
	},
})

export default theme
