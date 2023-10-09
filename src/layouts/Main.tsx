import { Outlet } from 'react-router-dom'
import * as Components from '@components'

const Main = () => {
  return (
    <div>
      <Components.Header />
      <Outlet />
      <Components.Footer />
    </div>
  )
}

export default Main
