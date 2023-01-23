

const Button = ({ type, children, ...buttonProps}) => {
    const classNameType = type === "primary" ? "PrimaryButton" : "SecondaryButton";
    return (
        <button className={`button ${classNameType}`} {...buttonProps}>
            {children}
        </button>
    )
};

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