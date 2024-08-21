import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { InputLogin } from './components/InputLogin';



export const Login = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('')

   const emailLength = useMemo(() => {
      console.log("Executou")
      return email.length * 1000;
   }, [email.length]);

   const inputPasswordRef = useRef<HTMLInputElement>(null)

   const handleLogin = useCallback(() => {
      console.log(email);
      console.log(password)
   }, [email, password])

   return (
      <div>
         <form>
            <p>Quantidade de caracteres no email: {emailLength}</p>

            <InputLogin
               label="Email"
               value={email}
               onChange={newValue => setEmail(newValue)}
               onPressEnter={() => inputPasswordRef.current?.focus()}
            />

            <InputLogin
               label="Senha"
               type="password"
               value={password}
               onChange={newValue => setPassword(newValue)}
            />

            <button type="button" onClick={handleLogin}>
               Entrar
            </button>

         </form>
      </div>
   );
}