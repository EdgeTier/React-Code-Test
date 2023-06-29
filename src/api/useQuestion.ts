import { useEffect, useState } from "react";

export interface Question {
    readonly id: number;
    readonly title: string;
    readonly clues: {
        readonly album: string;
        readonly members: string[];
    };
}

/**
 * Get a question given an ID.
 */
export const useQuestion = (questionId: number) => {
    const [question, setQuestion] = useState<Question | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:3000/questions/${questionId}`;
            const request = await fetch(url);
            setQuestion(await request.json());
        };
        fetchData();
    }, [questionId]);

    return { isLoading: question === null, question };
};
