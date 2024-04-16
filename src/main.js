const Main = () =>{
    return <main className="col-md-8">
        <div>
            <h1 className="d-flex justify-content-center">¡Descubre la revolución en limpieza con nuestra nueva publicación de productos de limpieza!</h1>

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://unilimpio.com/static/a3929000b57b1d0cf3e20104bd5507a0/b7dec/productos-de-limpieza-para-tu-hogar.webp" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.cien.adexperu.org.pe/wp-content/uploads/2023/10/productos-limpieza-basicos-1.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://s3.ppllstatics.com/laverdad/www/multimedia/2023/03/15/productos-limpieza-toxicos-peligrosos-ocu-ksTE-U1909178767610w-1200x840@La%20Verdad.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
        <div className="py-4">
            <p></p>
            <div>
                <p>En un mundo donde la limpieza es esencial, nosotros te ofrecemos una solución completa y eficaz para mantener tu hogar, oficina o cualquier espacio impecable y reluciente.</p>
                <p>¿Qué te ofrecemos?</p>
                <ul>
                    <li>
                        <p><strong>Variedad de productos:</strong> Desde desinfectantes hasta detergentes, pasando por limpiadores multiusos, nuestra publicación tiene todo lo que necesitas para abordar cualquier tarea de limpieza.</p>
                    </li>
                    <li>
                        <p><strong>Calidad superior:</strong> Nuestros productos están formulados con ingredientes de primera calidad que garantizan resultados excepcionales sin comprometer la seguridad ni el medio ambiente.</p>
                    </li>
                    <li>
                        <p><strong>Eficiencia probada:</strong> Con años de experiencia en el mercado, nuestros productos han demostrado su eficacia en numerosos hogares y establecimientos comerciales. ¡Confía en lo probado y verdadero!</p>
                    </li>
                </ul>
                <p>No pierdas más tiempo y únete a la legión de clientes satisfechos que confían en nuestra publicación de productos de limpieza. ¡Haz de la limpieza una tarea fácil y disfruta de un espacio impecable en todo momento!</p>
            </div>
        </div>
    </main>
}

export default Main;