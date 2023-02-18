import { createContext, useState, useContext } from 'react';

const TokenContext = createContext(null);

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const setTokenInLocalStorage = (newToken) => {
    if (!newToken) {
      localStorage.removeItem('token');
    } else {
      localStorage.setItem('token', newToken);
    }

    setToken(newToken);
  };

  return (
    <TokenContext.Provider value={[token, setTokenInLocalStorage]}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  return useContext(TokenContext);
};

// import { createContext, useState, useContext } from 'react';

// const TokenContext = createContext({});

// export const TokenProvider = ({ children }) => {
//     const [token, setToken] = useState(() => {
//         try {
//             return localStorage.getItem('token');
//         } catch (error) {
//             console.error(error);
//             return null;
//         }
//     });

//     const updateToken = (newToken) => {
//         try {
//             if (!newToken) {
//                 localStorage.removeItem('token');
//             } else {
//                 localStorage.setItem('token', newToken);
//             }

//             setToken(newToken);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <TokenContext.Provider value={{ token, updateToken }}>
//             {children}
//         </TokenContext.Provider>
//     );
// };

// export const useToken = () => {
//     const { token, updateToken } = useContext(TokenContext);
//     return { token, updateToken };
// };
