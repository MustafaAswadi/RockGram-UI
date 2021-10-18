import { useState } from 'react';

export default function useToken() {
    
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    // const userToken = JSON.parse(tokenString);
    return tokenString
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: any) => {
    sessionStorage.setItem('token', userToken);
    setToken(userToken.token);
  };

  // const getActiveUserId = () => {
  //   const tokenString = sessionStorage.getItem('token');
  //   const userToken = JSON.parse(tokenString);
  //   return userToken?.token
  // };
  // const [activeUserId, setActiveUserId] = useState(getActiveUserId())

  // const saveActiveUserId = activeUserId => {
  //   sessionStorage.setItem('activeUserId', activeUserId)
  //   setActiveUserId(activeUserId.activeUserId)
  // }

  return {
    setToken: saveToken,
    token,
    // setActiveUserId: saveActiveUserId,
    // activeUserId
  }

}
