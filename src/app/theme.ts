import { extendTheme, ColorModeScript } from "@chakra-ui/react";
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
});

export default theme;