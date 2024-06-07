import React from "react";
import carImage from "../../assets/images/img_car.png"

const Hero: React.FC = ()=>{
    return (
        <>
            <section id="hero" className="hero position-relative d-flex align-items-center justify-content-center">
            <div className="container-xl">
                <div className="hero__content d-flex flex-md-row flex-column">
                <div className="hero__text d-flex flex-column col-md-6">
                    <h1 className="hero__heading heading-font">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p className="hero__paragraph paragraph-font">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                    terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                    untuk sewa mobil selama 24 jam.</p>
                    <div>
                    <button className="button" type="submit">Mulai Sewa Mobil</button>
                    </div>
                </div>
                <div className="hero__img">
                    <img src={carImage} alt="Hero Image"/>
                </div>
                </div>
            </div>
            </section>
        </>
    );
}

export default Hero;