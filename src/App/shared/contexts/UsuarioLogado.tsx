import React, { createContext, useCallback } from 'react';

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface UsuarioLogadoProviderProps {
    children: React.ReactNode
}

export const UsuarioLogadoProviderProps: React.FC<UsuarioLogadoProviderProps> = ({ children }) => {

    const handleLogout = useCallback(() => {
       console.log("Logout executado.")
    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Higino', logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}