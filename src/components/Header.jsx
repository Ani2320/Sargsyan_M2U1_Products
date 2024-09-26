import '../styles/header.css'

function Header(props) {
  return (
    <header>
        <div className = "navigator">Sección de navegación</div>
        <h3 className='ml-30'>{props.screenName}</h3>
    </header>
  )
}

export default Header