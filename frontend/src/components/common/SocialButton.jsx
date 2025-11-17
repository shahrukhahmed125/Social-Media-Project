import Facebook from "../../assets/img/icons/facebook-logo.svg";
import Google from "../../assets/img/icons/google-logo.svg";
import Apple from "../../assets/img/icons/apple-logo.svg";


const SocialButton = ({ provider, outline, dark }) => {
  let icon = ''
  let className = 'p-2 btn btn-info d-flex align-items-center justify-content-center'

  switch (provider) {
    case 'facebook':
      icon = Facebook
      className += ' btn-info'
      break

    case 'google':
      icon = Google
      className += outline ? ' btn-outline-light' : ' btn-light'
      break

    case 'apple':
      icon = Apple
      className += dark ? ' btn-dark' : ' btn-light'
      break

    default:
      break
  }
  return (
    <>
      <div className='text-center flex-fill'>
        <a type='button' className={className}>
          <img className='img-fluid m-1' src={icon} alt={provider} />
        </a>
      </div>
    </>
  )
}

export default SocialButton
