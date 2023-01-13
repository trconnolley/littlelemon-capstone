

const Button = ({ type, children, ...buttonProps}) => {
    const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
    return (
        <button className={`button ${className}`} {...buttonProps}>
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