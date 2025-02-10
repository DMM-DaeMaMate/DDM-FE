import { AxiosError } from "axios"
import { instance, tempCookie } from ".."
import { Post, Results } from "./type"

const router = "/results"

export default class ResultsService {
    static async create(data: Post): Promise<number> {
        try {
            const response = await instance.post(`${router}/create`, {
                params: data,
            })
            tempCookie.setToken(response.headers["Authorization"])
            return response.status
        } catch (e) {
            if (e instanceof AxiosError) return e.status ?? 500
            else return 500
        }
    }

    static async update(data: Results): Promise<number> {
        try {
            const response = await instance.put(`${router}/update`, {
                param: data,
            })
            tempCookie.setToken(response.headers["Authorization"])
            return response.status
        } catch (e) {
            if (e instanceof AxiosError) return e.status ?? 500
            return 500
        }
    }

    static async read(): Promise<Results[]> {
        return await instance
            .get<Results[]>(`${router}/read`)
            .then((res) => res.data)
    }

    static async delete(id: number): Promise<number> {
        try {
            const response = await instance.post(`${router}/delete`, {
                id: id,
            })
            tempCookie.setToken(response.headers["Authorization"])
            return response.status
        } catch (e) {
            if (e instanceof AxiosError) return e.status ?? 500
            return 500
        }
    }
}
