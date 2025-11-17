const Button = ({ text, className }) => {
  return (
    <>
        <button className={`btn btn-primary ${className}`}>
        {text}
        </button>
    </>
  )
}

export default Button