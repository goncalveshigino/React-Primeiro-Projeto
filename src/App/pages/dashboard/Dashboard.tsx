import { useCallback, useState } from 'react';


export const Dashboard = () => {
    const [lista, setLista] = useState<string[]>(['Teste1','Teste2','Teste3'])
    
    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((event) => {
      if (event.key === 'Enter') {
        if (event.currentTarget.value.trim().length === 0) return;
        
        const value = event.currentTarget.value;
        event.currentTarget.value = ''

       
        setLista((oldLista) => {
            if (oldLista.includes(value)) return oldLista;

            return [...oldLista, value]
        })
      }
    }, [])

    return(
        <div>
            <p>Lista</p>

            <input 
              onKeyDown={handleInputKeyDown}
            />

            <ul>
                {lista.map((value)=> {
                  return <li key={value}>{value}</li>
                })}
            </ul>

        </div>
    );
}

