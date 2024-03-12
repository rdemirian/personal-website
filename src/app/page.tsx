'use client'
import Header from "@/components/header";
import Nav from "@/components/nav";
import ToggleColorMode from "@/components/toggleTheme";
import { Box, Stack, Text } from "@chakra-ui/react";


export default function Home() {
  return (
    <Box className="pageContents">
      <Header showNav={false}></Header>
      <Stack direction={'column'} align={'center'} py={'20vw'}>
        <Nav></Nav>
        <Box className="nameTitleBox"><Text className="nameTitle">Raffi</Text></Box>
      </Stack>
    </Box>
  );
}
