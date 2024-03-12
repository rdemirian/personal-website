'use client'
import Header from "@/components/header";
import Nav from "@/components/nav";
import ToggleColorMode from "@/components/toggleTheme";
import { Box, Stack, Text } from "@chakra-ui/react";


export default function About() {
  return (
    <Box className="pageContents">
      <Header showNav={true}></Header>
    </Box>
  );
}