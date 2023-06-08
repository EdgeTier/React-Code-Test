import { FunctionComponent } from "react";
import { useQuestion } from "../../api/useQuestion";
import "./Question.scss";

type QuestionProps = {};

/**
 * Display a question and input box to make a guess.
 */
export const Question: FunctionComponent<QuestionProps> = () => {
    const { isLoading, question } = useQuestion(1);
    return <div className="question">{!isLoading && question?.title}</div>;
};
