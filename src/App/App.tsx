import { Routes } from "./routes";
import { UsuarioLogadoProviderProps } from "./shared/contexts";

export const App = () => {
  return (
    <UsuarioLogadoProviderProps>
         < Routes />
    </UsuarioLogadoProviderProps>
  );
}

