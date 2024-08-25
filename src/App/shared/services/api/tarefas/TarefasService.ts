import { Api } from "../ApiConfig"
import { ApiException } from "../ApiException";

export interface ITarefa {
    id: number
    title: string;
    isCompleted: boolean;
}

const getAll = async (): Promise<ITarefa[] | ApiException> => {
    try {
        const { data } = await Api().get('/tarefas')
        return data
    } catch (error: any) {
        throw new ApiException(error.message || 'Erro ao consultar API.')
    }
};

const getById = async (id: number): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().get(`/tarefas/${id}`)
        return data
    } catch (error: any) {
        throw new ApiException(error.message || 'Erro ao buscar as tarefas API.')
    }
};

const create = async (dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa | ApiException> => {
    try {
        //const { data } = await Api().post<any>('/tarefas', dataToCreate)
        const { data } = await Api().post('/tarefas', dataToCreate)
        return data
    } catch (error: any) {
        throw new ApiException(error.message || 'Erro ao criar tarefa.')
    }
};

const updateById = async (id: number, dataToUpdate: ITarefa): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().put(`/tarefas/${id}`)
        return data
    } catch (error: any) {
        throw new ApiException(error.message || 'Erro ao atualizar os dados na API.')
    }
};

const deleteById = async (id: number): Promise<undefined | ApiException> => {
    try {
        //await Api().get(`/tarefas/${id}`)
        await Api().delete(`/tarefas/${id}`)
        return undefined
    } catch (error: any) {
        throw new ApiException(error.message || 'Erro ao apagar dados.')
    }
};

export const TarefasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};