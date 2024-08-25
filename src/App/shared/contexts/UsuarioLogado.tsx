import React, { createContext, useCallback, useEffect, useState } from 'react';

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface UsuarioLogadoProviderProps {
    children: React.ReactNode
}

export const UsuarioLogadoProviderProps: React.FC<UsuarioLogadoProviderProps> = ({ children }) => {
    const [nome, setNome] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setNome('Higino')
        }, 400)
    })

    const handleLogout = useCallback(() => {
       console.log("Logout executado.")
    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}