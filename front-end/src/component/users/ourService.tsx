import React from "react";
import image_service from "../../assets/images/img_service.png";

const OurService: React.FC = () => {
  return (
    <>
      <section id="ourService" className="ourService">
        <div className="container-xl">
          <div className="service__content d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div className="service__img">
              <img src={image_service} alt="Our Service" />
            </div>
            <div className="service__desc d-flex flex-column col-md-6">
              <h2 className="service__heading heading2-font">
                Best Car Rental for any kind of trip in (Lokasimu)!
              </h2>
              <p className="service__paragraph paragraph-font">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <div className="service__point d-flex flex-row gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                  <path
                    d="M17.3333 8L9.99996 15.3333L6.66663 12"
                    stroke="#0D28A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="paragraph-font">
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </p>
              </div>
              <div className="service__point d-flex flex-row gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                  <path
                    d="M17.3333 8L9.99996 15.3333L6.66663 12"
                    stroke="#0D28A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="paragraph-font">
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </p>
              </div>
              <div className="service__point d-flex flex-row gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                  <path
                    d="M17.3333 8L9.99996 15.3333L6.66663 12"
                    stroke="#0D28A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="paragraph-font">
                  Sewa Mobil Jangka Panjang Bulanan
                </p>
              </div>
              <div className="service__point d-flex flex-row gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                  <path
                    d="M17.3333 8L9.99996 15.3333L6.66663 12"
                    stroke="#0D28A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="paragraph-font">
                  Gratis Antar - Jemput Mobil di Bandara
                </p>
              </div>
              <div className="service__point d-flex flex-row gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                  <path
                    d="M17.3333 8L9.99996 15.3333L6.66663 12"
                    stroke="#0D28A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="paragraph-font">
                  Layanan Airport Transfer / Drop In Out
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurService;
