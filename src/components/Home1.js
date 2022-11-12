import React, { Component } from "react";
import "../css/Home.css";

const src1 = "https://i.ytimg.com/vi/A6eZ49O67YQ/maxresdefault.jpg";
const src2 = "https://www.filmibeat.com/ph-big/2020/02/aranya_158166071540.jpg";
const src3 = "https://i2.cinestaan.com/image-bank/1500-1500/181001-182000/181504.jpg";
const src4 = "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/08/bhuj-1628757158.jpg";
const src5 = "https://i.pinimg.com/736x/4a/b0/1d/4ab01d9c7ddb6e1659ac3c6a9fb2fad7.jpg";
const src6 = "https://wallpaperaccess.com/full/4848061.jpg";


class Home extends Component {
  render() {
    return (
      <>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide back"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner section-1 my-2" id="carousel-1">
            <div className="carousel-item active">
              <img src={src1} class="d-block w-100" alt="..." height="400px" />
            </div>
            <div className="carousel-item">
              <img src={src2} class="d-block w-100" alt="..." height="400px" />
            </div>
            <div className="carousel-item">
              <img src={src3} class="d-block w-100" alt="..." height="400px" />
            </div>
          </div>
          <div className="carousel-inner section-1 my-2" id="carousel-2">
            <div className="carousel-item active">
              <img src={src1} class="d-block w-100" alt="..." height="400px" />
            </div>
            <div className="carousel-item">
              <img src={src2} class="d-block w-100" alt="..." height="400px" />
            </div>
            <div className="carousel-item">
              <img src={src3} class="d-block w-100" alt="..." height="400px" />
            </div>
          </div>
        </div>
        
         <section className="section-2">
              <h2 className="py-3">Movies</h2>
         </section>
         <section className="section-3">
              <h2 className="py-3">Contact Us</h2>
         </section>
      </>
    );
  }
}

export default Home;
