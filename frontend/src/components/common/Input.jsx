const Input = ({ label, type, icon, isPassword }) => {
  return (
    <>
        <div className="mb-3">
            {label && <label className="form-label">{label}</label>}
            <div className="input-group input-group-flat">
                <input type={type} className="form-control" />

                {icon && (
                <span className="input-group-text">
                    <i className={icon}></i>
                </span>
                )}
            </div>
        </div>
    </>
  )
}

export default Input