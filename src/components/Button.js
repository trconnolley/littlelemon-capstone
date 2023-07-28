
import {Link} from 'react-router-dom';

const Button = ({ type, children, ...buttonProps}) => {
    const classNameType = type === "primary" ? "PrimaryButton" : "SecondaryButton";
    return (
        <button className={`button ${classNameType}`} {...buttonProps}>
            {children}
        </button>
    )
};

const LinkButton = ({type, destination, children, ...linkProps}) => {
    const classNameType = type === "primary" ? "PrimaryButton" : "SecondaryButton";
    return (
        <Link to={`/${destination}`} className={`button ${classNameType}`} {...linkProps}>
            {children}
        </Link>
    )
}
// const SubmitButton = ({type, children, ...buttonProps}) => {
//     return (
//         <Button
//             type="secondary"
//             {...buttonProps}
//             onClick={() => alert("Logging In!")}
//         >
//             {children}
//         </Button>
//     );
// };

export default Button;
export {LinkButton};