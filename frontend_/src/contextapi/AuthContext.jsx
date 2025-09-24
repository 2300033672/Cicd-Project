import { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Provider component to manage login states and user data
export function AuthProvider({ children }) 
{
  // Load initial state from sessionStorage or default to false/null
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return sessionStorage.getItem('isAdminLoggedIn') === 'true';
  });

  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(() => {
    return sessionStorage.getItem('isCustomerLoggedIn') === 'true';
  });
  
  const [isManagerLoggedIn, setIsManagerLoggedIn] = useState(() => {
    return sessionStorage.getItem('isManagerLoggedIn') === 'true';
  });

  // Save state to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('isAdminLoggedIn', isAdminLoggedIn);
    sessionStorage.setItem('isCustomerLoggedIn', isCustomerLoggedIn);
    sessionStorage.setItem('isManagerLoggedIn', isManagerLoggedIn);
  }, [isAdminLoggedIn, isCustomerLoggedIn, isManagerLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        isCustomerLoggedIn,
        setIsCustomerLoggedIn,
        isManagerLoggedIn,
        setIsManagerLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access the context
export const useAuth = () => useContext(AuthContext);