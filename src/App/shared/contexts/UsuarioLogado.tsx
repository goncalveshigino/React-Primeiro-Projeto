import React, { createContext } from 'react';

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface UsuarioLogadoProviderProps {
    children: React.ReactNode
}

export const UsuarioLogadoProviderProps: React.FC<UsuarioLogadoProviderProps> = ({ children }) => {

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Higino' }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}