import Images from "./Images";
import Icons from "./Icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div
        id="hero-carousel"
        className="carousel slide bg-black"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        {/* <div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#hero-carousel"
							className="active"
							aria-current="true"
							data-bs-slide-to="0"
							aria-label="Slide 1"
						></button>
						<button
							type="button"
							data-bs-target="#hero-carousel"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						></button>
						<button
							type="button"
							data-bs-target="#hero-carousel"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						></button>
						<button
							type="button"
							data-bs-target="#hero-carousel"
							data-bs-slide-to="3"
							aria-label="Slide 4"
						></button>
					</div> */}

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Images.bgHome} className="d-block w-100" loading="lazy" />
          </div>

          <div className="carousel-item">
            <img
              src={Images.bgAbout1}
              className="d-block w-100"
              loading="lazy"
            />
          </div>

          <div className="carousel-item">
            <img
              src={Images.bgHero2}
              className="d-block w-100"
              loading="lazy"
            />
          </div>

          <div className="carousel-item">
            <img src={Images.bgHero} className="d-block w-100" loading="lazy" />
          </div>
        </div>

        <div className="hero-elements">
          <h2>"ALWAYS AT ITS BEST!"</h2>
          <h1>Let Us Take You on an Extraordinary Adventure!</h1>
          <Link to="/getintouch">Book A Tour Now</Link>
          <br />
          {/* <a href="#exploreMore" className="scroll-down"></a> */}
        </div>
      </div>

      <button
        className="carousel-control-prev hero-prev-btn"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-slider p-2" aria-hidden="true">
          {Icons.chevronLeft}
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next hero-next-btn"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-slider p-2" aria-hidden="true">
          {Icons.chevronRight}
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
}
