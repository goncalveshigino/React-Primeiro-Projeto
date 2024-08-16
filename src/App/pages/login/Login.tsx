import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

/*export const Login = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home')
  }

  return (
     <div>
        Login
        
        <button onClick={handleClick}>Página Incial</button>
     </div>
  );
}*/

export const Login = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleLogin = () => {
     console.log(email)
     console.log(password)
  }

  return (
     <div>
        <form>

           <label>
              <span>Email</span>
              <input value={email} onChange={e => setEmail(e.target.value)}/>
           </label>

           <label>
              <span>Senha</span>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
           </label>

           <button type="button" onClick={handleLogin}>
               Entrar
           </button>

        </form>
     </div>
  );
}