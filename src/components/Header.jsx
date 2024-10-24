import '../styles/header.css'

function Header(props) {
  return (
    <header>
        <div className = "navigator">Sección de navegación</div>
        <h2 className='ml-30'>{props.screenName}</h2>
    </header>
  )
}

export default Header