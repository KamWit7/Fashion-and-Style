import { Outlet } from 'react-router-dom'
import { Header, Footer, Center } from '@components'

const Main = () => {
  return (
    <>
      <Center>
        <Header />
      </Center>
      <Outlet />
      <Center>
        <Footer />
      </Center>
    </>
  )
}

export default Main
