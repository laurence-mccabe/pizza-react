import { useLoaderData } from 'react-router-dom'
import { getMenu } from '../../services/apiRestaurant'
import MenuItem from './MenuItem'

function Menu() {
  const menu = useLoaderData()
  console.log(menu)

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza}>
          <h1>{pizza.name}</h1>
          <p>{pizza.description}</p>
          <p>{pizza.price}</p>
        </MenuItem>
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu()
  return menu
}

export default Menu
