import './button.css'

export const Button = ({className, onClick, children}) => {
    return <button className={className}
        onClick={onClick}>
            {children}
    </button>
}