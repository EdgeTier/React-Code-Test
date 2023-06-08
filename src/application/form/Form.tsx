import classnames from "classnames";
import { Button } from "../button/Button";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";

type FormProps = {
    readonly isCorrect?: boolean | null;
    readonly isDisabled?: boolean;
    readonly onSubmit: (value: string) => void;
};

/**
 * Render a form with a single text input and submit button.
 */
export const Form: FunctionComponent<FormProps> = ({ isCorrect, isDisabled, onSubmit }) => {
    const { formState, register, handleSubmit } = useForm();
    return (
        <form
            className={classnames("form", { "form--is-correct": isCorrect, "form--is-incorrect": isCorrect === false })}
            onSubmit={handleSubmit(({ answer }) => answer.length > 0 && onSubmit(answer.trim()))}
        >
            <input autoComplete="off" autoFocus spellCheck={false} disabled={isDisabled} {...register("answer")} />
            <Button disabled={isDisabled || !formState.isDirty} icon={faCircleCheck} type="submit">
                Submit
            </Button>
        </form>
    );
};
