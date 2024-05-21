import { Link } from "react-router-dom";

const Header = () =>{
    return <header className="d-flex justify-content-center py-3 bg-dark">
      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="/" className="nav-link active text-white" aria-current="page"><i data-feather="home"></i> Inicio</Link></li>
        <li className="nav-item"><Link to="/producto" className="nav-link text-white"><i data-feather="shopping-cart"></i> Productos</Link></li>
        <li className="nav-item"><Link to="/nosotros" className="nav-link text-white"><i data-feather="user"></i> Acerca de Nosotros</Link></li>
        <li className="nav-item"><Link to="/consultas" className="nav-link text-white"><i data-feather="help-circle"></i> Consulta</Link></li>
      </ul>
    </header>
}

export default Header;