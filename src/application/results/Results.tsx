import { FunctionComponent } from "react";
import "./Results.css";

type ResultsProps = {
    readonly correctCount: number;
    readonly totalCount: number;
};

/**
 * Display results.
 */
export const Results: FunctionComponent<ResultsProps> = ({ correctCount, totalCount }) => {
    return (
        <p className="results">
            Congratulations, you scored {correctCount} out of {totalCount}!
        </p>
    );
};
