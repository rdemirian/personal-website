'use client'

import ToggleColorMode from "@/components/toggleTheme";
import { Box, Center, Stack, Text } from "@chakra-ui/react";


export default function Home() {
  return (
    <Box>
      <ToggleColorMode />
      <Stack direction={'column'} align={'center'} py={'20vw'}>
        <Text className="nameTitle">Raffi</Text>
      </Stack>
    </Box>
  );
}
