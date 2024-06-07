import React from "react";


const CTA: React.FC=()=>{
    return(
        <>
        <section id="cta" className="cta">
        <div className="container-xl ">
            <div className="cta__content d-flex flex-column text-center justify-content-center align-items-center text-white">
            <div className="cta__text">
                <h2 className="cta__heading heading-font">Sewa Mobil di (Lokasimu) Sekarang</h2>
                <p className="cta__paragraph paragraph-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className="cta__button">
                <button className="button" type="submit">Mulai Sewa Mobil</button>
                </div>
            </div>
            </div>
            
        </div>
        </section>
        </>
    );
};

export default CTA;