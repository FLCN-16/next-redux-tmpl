import React from 'react';

const useAuthUser = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return user;
};

export default useAuthUser;
