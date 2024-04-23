import { Container, Row, Col, Carousel } from 'react-bootstrap';

const Main = () => {
    return (
        <Container className="col-8">
            <Row className="justify-content-center">
                <Col >
                    <h1 className="text-center">¡Descubre la revolución en limpieza con nuestra nueva publicación de productos de limpieza!</h1>
                    <Carousel id="carouselExample">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://unilimpio.com/static/a3929000b57b1d0cf3e20104bd5507a0/b7dec/productos-de-limpieza-para-tu-hogar.webp"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.cien.adexperu.org.pe/wp-content/uploads/2023/10/productos-limpieza-basicos-1.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://s3.ppllstatics.com/laverdad/www/multimedia/2023/03/15/productos-limpieza-toxicos-peligrosos-ocu-ksTE-U1909178767610w-1200x840@La%20Verdad.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className="py-4">
                        <p>En un mundo donde la limpieza es esencial, nosotros te ofrecemos una solución completa y eficaz para mantener tu hogar, oficina o cualquier espacio impecable y reluciente.</p>
                        <p>¿Qué te ofrecemos?</p>
                        <ul>
                            <li>
                                <strong>Variedad de productos:</strong> Desde desinfectantes hasta detergentes, pasando por limpiadores multiusos, nuestra publicación tiene todo lo que necesitas para abordar cualquier tarea de limpieza.
                            </li>
                            <li>
                                <strong>Calidad superior:</strong> Nuestros productos están formulados con ingredientes de primera calidad que garantizan resultados excepcionales sin comprometer la seguridad ni el medio ambiente.
                            </li>
                            <li>
                                <strong>Eficiencia probada:</strong> Con años de experiencia en el mercado, nuestros productos han demostrado su eficacia en numerosos hogares y establecimientos comerciales. ¡Confía en lo probado y verdadero!
                            </li>
                        </ul>
                        <p>No pierdas más tiempo y únete a la legión de clientes satisfechos que confían en nuestra publicación de productos de limpieza. ¡Haz de la limpieza una tarea fácil y disfruta de un espacio impecable en todo momento!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;
