import { useCallback, useEffect, useState } from 'react';
import { ITarefa, TarefasService } from '../../shared/services/api/tarefas/TarefasService';
import { ApiException } from '../../shared/services/api/ApiException';


export const Dashboard = () => {
    const [lista, setLista] = useState<ITarefa[]>([])

    useEffect(() => {
       TarefasService.getAll()
        .then((result) => {
            if (result instanceof ApiException) {
                alert(result.message);
            } else {
                setLista(result);
            }
        })
    }, [])

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((event) => {

      if (event.key === 'Enter') {
        if (event.currentTarget.value.trim().length === 0) return;
        
        const value = event.currentTarget.value;
        event.currentTarget.value = ''

        if (lista.some((listItem) => listItem.title === value)) return;

        TarefasService.create({title: value, isCompleted: false})
            .then((result) => {
                if(result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setLista((oldLista) => [...oldLista, result])
                }
            });
      }
    }, [lista])

    const handleToggleComplete = useCallback((id: number) => {

        const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id);
        if (!tarefaToUpdate) return;

        console.log(`Atualizando tarefa com ID: ${id}`);

        TarefasService.updateById(id, {
            ...tarefaToUpdate, 
            isCompleted: !tarefaToUpdate.isCompleted
        })
        .then((result) => {
            if(result instanceof ApiException) {
                alert(result.message);
            } else {
                setLista((oldLista) => {
                    return oldLista.map(oldListaItem => {
                        if (oldListaItem.id === id) return result;
                        return oldListaItem
                    })
                })
            }
        });
    }, [lista]);



    const handleDelete = useCallback((id: number) => {

        TarefasService.deleteById(id)
        .then((result) => {
            if(result instanceof ApiException) {
                alert(result.message);
            } else {
                setLista((oldLista) => {
                    return oldLista.filter(oldListaItem => oldListaItem.id !== id)
                })
            }
        });
    }, []);

    return(
        <div>
            <p>Lista</p>

            <input 
              onKeyDown={handleInputKeyDown}
            />

            <p>{lista.filter((listItem)=> listItem.isCompleted).length}</p>

            <ul>
                {lista.map((listItem)=> {
                  return <li key={listItem.id}>

                    <input 
                    type="checkbox" 
                    checked = {listItem.isCompleted}
                    onChange={() => handleToggleComplete(listItem.id)}
                    />
                    {listItem.title}

                    <button onClick={() => handleDelete(listItem.id)}>Apagar</button>
                    </li>
                })}
            </ul>

        </div>
    );
}

