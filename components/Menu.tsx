import Link from "next/link";
import  "./Menu.css";
export default function Menu() {
  return (
    <header className="navbar">
      <div className="container">

        <Link href="/" className="logo">
          DISTRIDAV
        </Link>

        <nav>
          <ul className="menu">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/catalogo">Catálogo de productos</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/contacto">Contactanos</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
