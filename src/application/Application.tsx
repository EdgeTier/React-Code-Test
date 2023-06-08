import { Loading } from "./loading/Loading";
import "./Application.scss";

// Total number of rounds.
const ROUNDS = 5;

/**
 * Container for the application.
 */
export const Application = () => {
    return (
        <div className="application">
            <h1>Guess the Bands</h1>
            <Loading />
        </div>
    );
};
