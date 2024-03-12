import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
    styles: {
        global: (props: Record<string, any>) => ({
            body: {
                color: mode('#141214', '#FFFADD')(props),
                bg: mode('#FFFADD', '#141214')(props),
            },
        }),
    },
    colors: {
        brand: {
            light: 'orange',
            dark: '#00ff9b',
        }
    },
});

export default theme;