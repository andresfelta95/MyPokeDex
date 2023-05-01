//  ConText for Auth
import * as React from 'react';


// Context
export const AuthContext = React.createContext({
    user: undefined,
    login: () => null,
    logout: () => null,
});

export function AuthProvider(props) {
    const { children } = props;
    const [ auth, setAuth ] = React.useState(undefined);

    const login = (userData) => {
        setAuth(userData);
    }

    const logout = () => {
        setAuth(undefined);
    }

    const valueContext = {
        auth,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={ valueContext }>
            {children}
        </AuthContext.Provider>
    );
}
