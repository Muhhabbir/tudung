import { Carousel } from "react-bootstrap";
const CarouselImg = () => {
    return (
        <div>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/28064854/12.-Tips-Merawat-Anak-Kucing-Munchkin.jpg.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Bayi Kocheng</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://asset.kompas.com/crops/SV5q4gPkeD8YJTuzO31BqTr9DEI=/192x128:1728x1152/750x500/data/photo/2021/03/06/60436a28b258b.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Kocheng Oren</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.suara.com/pictures/653x366/2021/12/28/11513-ilustrasi-kucing-dengan-mata-beda-warna-pixabaybaran65.webp"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Kocheng Putih</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    )
}

export default CarouselImg;