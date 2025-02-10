import { AxiosError } from "axios"
import { instance, tempCookie } from ".."
import { Todo } from "./type"

const router = "/todo"

export default class TodoService {
    static async create(
        title: string,
        date: Date,
        context: string
    ): Promise<number> {
        try {
            const response = await instance.post(`${router}/create`, {
                title: title,
                date: date,
                context: context,
            })
            tempCookie.setToken(response.headers["Authorization"])
            return response.status
        } catch (e) {
            if (e instanceof AxiosError) return e.status ?? 500
            else return 500
        }
    }

    static async update(
        id: number,
        title: string,
        context: string
    ): Promise<number> {
        try {
            const response = await instance.put(`${router}/update`, {
                id: id,
                title: title,
                context: context,
            })
            tempCookie.setToken(response.headers["Authorization"])
            return response.status
        } catch (e) {
            if (e instanceof AxiosError) return e.status ?? 500
            return 500
        }
    }

    static async read(): Promise<Todo[]> {
        return await instance
            .get<Todo[]>(`${router}/read`)
            .then((res) => res.data)
    }

    static async delete(id: number): Promise<number> {
        try {
            const response = await instance.delete(`${router}/delete`, {
                data: { id: id },
            })
            tempCookie.setToken(response.headers["Authorization"])
            return response.status
        } catch (e) {
            if (e instanceof AxiosError) return e.status ?? 500
            return 500
        }
    }
}
