interface IButtonLoginPropos {
    onClick: () => void;
    type?: "button" | "submit" | "reset"

    children: React.ReactNode
}

export const ButtonLogin: React.FC<IButtonLoginPropos> = ({type, onClick, children}) => {
    return (
        <button type={type} onClick={onClick}>
              {children}
        </button>
    );
}