'use client'
import { AppShell, TabsList, TabsTab, Tabs } from "@mantine/core"
import Logo from "./Logo"
import { useState } from "react";
import classes from '../page.module.scss'
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";

export default function AppLayout({children}) {

  const [activeTab, setActiveTab] = useState('movies');
  const logoClick = () => {
    setActiveTab('movies')
  }
  const [opened, toggle] = useDisclosure(false)

  return (
    <AppShell
      navbar={{ width: 280 }}
      padding="10"
    >
      <AppShell.Navbar withBorder={false} bg='purple.0' p={24}>
        <Logo changeActiveTab={logoClick}/>
        <Tabs
          orientation='vertical'
          variant='pills'
          value={activeTab}
          onChange={setActiveTab}
          mt={50}
          radius={8}
        >
          <TabsList w={280} justify="center">
            <TabsTab value='movies' w={232} className={classes.tab} component={Link} href='/'>Movies</TabsTab>
            <TabsTab value='rated' w={232} className={classes.tab} component={Link} href='/rated'>Rated movies</TabsTab>
          </TabsList>
        </Tabs>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}