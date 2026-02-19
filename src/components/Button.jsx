function Button({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                padding: '8px 16px',
                backgroundColor: '#ffc107',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                marginTop: '8px',
            }}>
            {text}
        </button>
    )
}
export default Button; 