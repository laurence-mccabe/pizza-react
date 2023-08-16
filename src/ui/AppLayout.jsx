import { Outlet, useNavigation } from 'react-router-dom'
import CartOverview from '../features/cart/CartOverview'
import Header from './Header'
import Loader from './Loader'

const AppLayout = () => {
    const navigation = useNavigation()
    // console.log("navigation ==>",navigation)
    const isLoading = navigation.state ==="loading"

  return (
    <div className='layout'>
        {isLoading && <Loader />}
      <Header />
      <main>
        <h1>Content</h1>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  )
}

export default AppLayout
