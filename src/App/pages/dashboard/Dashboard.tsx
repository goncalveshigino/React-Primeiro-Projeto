
import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';
import { useRef } from 'react';


export const Dashboard = () => {

    const counterRef = useRef(0);

    const {nomeDoUsuario} = useUsuarioLogado();

    return(
        <div>
            <p>Dashboard</p>

            <p>{nomeDoUsuario}</p>

              <p>Contador: {counterRef.current}</p>

              <button onClick={() => counterRef.current++}>Somar</button>
              <button onClick={() => console.log(counterRef.current)}>Logar</button>

            <Link to="/login">Login</Link>
        </div>
    );
}

