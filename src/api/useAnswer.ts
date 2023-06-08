import { useEffect, useState } from "react";

interface Answer {
    readonly questionId: number;
    readonly text: string;
}

/**
 * Get an answer for a given question.
 */
export const useAnswer = (questionId: number) => {
    const [answer, setAnswer] = useState<Answer | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:3000/answers?questionId=${questionId}`;
            const request = await fetch(url);
            setAnswer((await request.json())[0]);
        };
        fetchData();
    }, [questionId]);

    return { isLoading: answer === null, answer };
};
