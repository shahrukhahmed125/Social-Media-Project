const Checkbox = ({label}) => {
  return (
    <>
        <div className="form-check form-check-md d-flex align-items-center">
            <input className="form-check-input mt-0" type="checkbox" />
            <label className="form-check-label text-dark ms-1">
                {label}
            </label>
        </div>
    </>
  )
}

export default Checkbox