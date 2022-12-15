import { createContext, useState } from "react";

const UserContext = createContext({
    username: '',
    _id: '',
});

export function UserContextProvider(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const context = {
      username: username,
      password: password
    };
  
    return (
      <UserContext.Provider value={context}>
        {props.children}
      </UserContext.Provider>
    );
  }
  
  export default UserContext;