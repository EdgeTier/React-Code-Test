import { useEffect, useState } from "react";
import { Question } from "./useQuestion";

/**
 * Get all available question IDs from the backend.
 */
export const useQuestionIds = () => {
    const [questions, setQuestions] = useState<Question[] | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:3000/questions`;
            const request = await fetch(url);
            setQuestions(await request.json());
        };
        fetchData();
    }, []);

    return { isLoading: questions === null, questionIds: questions?.map(({ id }) => id) };
};
