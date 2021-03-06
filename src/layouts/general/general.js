import React, { useState } from "react"

import clsx from "clsx"

import useStyles from "./styles"

import { useTheme } from "@material-ui/styles"

import { useMediaQuery } from "@material-ui/core"

import { Header, Sidebar, RouterBreadcrumbs } from "../../components"

const General = (props) => {
  const { children } = props

  const classes = useStyles()

  const theme = useTheme()

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true
  })

  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebarOpen = () => {
    setOpenSidebar(true)
  }

  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }

  const shouldOpenSidebar = isDesktop ? true : openSidebar

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
        [classes.containerTheme]: true
      })}>
      <Header openSidebar={openSidebar} onSidebarOpen={handleSidebarOpen} />

      <RouterBreadcrumbs />

      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? "persistent" : "temporary"}
      />

      <main className={classes.content}>{children}</main>
    </div>
  )
}

export default General
