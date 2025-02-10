export interface Results {
    id: number
    subject: string
    midterm_examination: number
    final_examination: number
    performance_assessment: performance_assessment[]
}

export interface Post {
    subject: string
    midterm_examination: number
    final_examination: number
    performance_assessment: performance_assessment[]
}

interface performance_assessment {
    content: string
    score: number
    id?: number
    length?: number
}
