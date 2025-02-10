import { AxiosError } from "axios"
import { instance, tempCookie } from ".."
import { Exit, User } from "./type"

export default class UserService {
    static async login(name: string, password: string): Promise<number> {
        try {
            const response = await instance.post("/user/login", {
                name: name,
                password: password,
            })
            tempCookie.setToken(response.headers["Authorization"])
            return response.status
        } catch (e) {
            if (e instanceof AxiosError) return e.status ?? 500
            else return 500
        }
    }

    static async signup(
        name: string,
        password: string,
        grade: number,
        my_class: number
    ): Promise<number> {
        try {
            const response = await instance.post("/user/signup", {
                name: name,
                password: password,
                grade: grade,
                my_class: my_class,
            })
            tempCookie.setToken(response.headers["Authorization"])
            return response.status
        } catch (e) {
            if (e instanceof AxiosError) {
                return e.status ?? 500
            } else {
                return 500
            }
        }
    }

    static async logout(): Promise<boolean> {
        try {
            const response = await instance.get("/user/logout")
            if (response.status === 200) {
                tempCookie.setToken(response.headers["Authorization"])
                return true
            }
            return false
        } catch (error) {
            console.error("Logout failed:", error)
            return false
        }
    }

    static async update({ grade, my_class }: User): Promise<number> {
        try {
            const response = await instance.put("/user/update", {
                grade: grade,
                my_class: my_class,
            })
            tempCookie.setToken(response.headers["Authorization"])
            return response.status
        } catch (e) {
            if (e instanceof AxiosError) {
                return e.status ?? 500
            } else {
                return 500
            }
        }
    }

    static async exit({ password }: Exit): Promise<number> {
        try {
            const response = await instance.post("/user/exit", {
                password: password,
            })
            tempCookie.setToken(response.headers["Authorization"])
            return response.status
        } catch (e) {
            if (e instanceof AxiosError) {
                return e.status ?? 500
            } else {
                return 500
            }
        }
    }

    static async get(): Promise<User> {
        return await instance.get<User>("/user/get").then((res) => res.data)
    }
}
