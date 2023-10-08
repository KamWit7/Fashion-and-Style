import React from 'react'
import { Outlet } from 'react-router-dom'
import * as Components from '@components'

const PageLayout = () => {
  return (
    <div>
      <Components.Header />
      <Outlet />
      <Components.Footer />
    </div>
  )
}

export default PageLayout
