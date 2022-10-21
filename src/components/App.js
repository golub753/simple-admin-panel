import { Admin, Resource } from "react-admin";
import { UserList, UserEdit, UserCreate } from "./Users/Users";
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => {
  return ( 
    <Admin dataProvider={dataProvider}>
      <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate} />
    </Admin>
   );
}
 
export default App;