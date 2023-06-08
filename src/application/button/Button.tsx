import { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./Button.scss";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    readonly icon: IconProp;
}

/**
 * Button with an icon.
 */
export const Button: FunctionComponent<ButtonProps> = ({ icon, children, ...otherProps }) => {
    return (
        <button className="button" {...otherProps}>
            <FontAwesomeIcon icon={icon} />
            {children}
        </button>
    );
};
