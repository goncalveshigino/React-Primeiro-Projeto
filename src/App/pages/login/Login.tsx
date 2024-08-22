import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { InputLogin, ButtonLogin} from './components/Export_Components'



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
               ref={inputPasswordRef}
               onChange={newValue => setPassword(newValue)}
            />

           
            <ButtonLogin type="button" onClick={handleLogin}>
               Entrar
            </ButtonLogin>
         </form>
      </div>
   );
}