import React, { useEffect } from "react";
import image_person1 from "../../assets/images/img_person1.png";
import image_person2 from "../../assets/images/img_person2.png";

const Testimoni: React.FC = () => {
  useEffect(() => {
    const btnLeft = document.querySelector(".btn-left");
    const btnRight = document.querySelector(".btn-right");
    const cardsContainer = document.querySelector(".card-container");

    if (!btnLeft || !btnRight || !cardsContainer) {
      // Pemeriksaan jika salah satu elemen tidak ditemukan
      console.error("One of the required elements is null.");
      return;
    }

    const handleRightClick = () => {
      const cardWidth =
        (cardsContainer.firstElementChild as HTMLElement)?.offsetWidth || 0;
      (cardsContainer as HTMLElement).style.transition =
        "transform 1s ease-in-out";
      (
        cardsContainer as HTMLElement
      ).style.transform = `translateX(-${cardWidth}px)`;
      setTimeout(() => {
        const firstCard = cardsContainer.firstElementChild;
        if (firstCard) {
          cardsContainer.appendChild(firstCard);
          (cardsContainer as HTMLElement).style.transition = "none";
          (cardsContainer as HTMLElement).style.transform = "translateX(0)";
        }
      }, 500);
    };

    const handleLeftClick = () => {
      const cardWidth =
        (cardsContainer.lastElementChild as HTMLElement)?.offsetWidth || 0;
      (cardsContainer as HTMLElement).style.transition =
        "transform 1s ease-in-out";
      (
        cardsContainer as HTMLElement
      ).style.transform = `translateX(${cardWidth}px)`;
      setTimeout(() => {
        const lastCard = cardsContainer.lastElementChild;
        if (lastCard) {
          cardsContainer.insertBefore(
            lastCard,
            cardsContainer.firstElementChild
          );
          (cardsContainer as HTMLElement).style.transition = "none";
          (cardsContainer as HTMLElement).style.transform = "translateX(0)";
        }
      }, 500);
    };

    btnRight.addEventListener("click", handleRightClick);
    btnLeft.addEventListener("click", handleLeftClick);

    return () => {
      btnRight.removeEventListener("click", handleRightClick);
      btnLeft.removeEventListener("click", handleLeftClick);
    };
  }, []);
  return (
    <>
      <section id="testimoni" className="testimoni">
        <div className="testimoni__content d-flex flex-column">
          <div className="d-flex flex-column align-items-center ">
            <h2 className="testimoni__header heading2-font">Testimonial</h2>
            <p className="testimoni__paragraph paragraph-font">
              Berbagai review positif dari para pelanggan kami
            </p>
          </div>
          <div className="testimoni__card d-flex flex-column align-items-center overflow-hidden">
            <div className="card-container d-flex flex-row column-gap-3">
              <div
                className="testimoni__item d-flex flex-md-row flex-column align-items-center p-3"
                style={{ backgroundColor: "#F1F3FF" }}
              >
                <img src={image_person1} alt="" className="testimoni__img" />
                <div className="d-flex flex-column testimoni__comment">
                  <svg
                    width="80"
                    height="16"
                    viewBox="0 0 80 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                      fill="#F9CC00"
                    />
                    <path
                      d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
                      fill="#F9CC00"
                    />
                    <path
                      d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
                      fill="#F9CC00"
                    />
                    <path
                      d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                      fill="#F9CC00"
                    />
                    <path
                      d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                  <p className="paragraph-font">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="paragraph-font">John Dee 32, Bromo</p>
                </div>
              </div>

              <div
                className="testimoni__item d-flex flex-md-row flex-column align-items-center p-3"
                style={{ backgroundColor: "#F1F3FF" }}
              >
                <img src={image_person2} alt="" />
                <div className="d-flex flex-column testimoni__comment">
                  <svg
                    width="80"
                    height="16"
                    viewBox="0 0 80 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                      fill="#F9CC00"
                    />
                    <path
                      d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
                      fill="#F9CC00"
                    />
                    <path
                      d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
                      fill="#F9CC00"
                    />
                    <path
                      d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                      fill="#F9CC00"
                    />
                    <path
                      d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                  <p className="paragraph-font">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="paragraph-font">John Dee 32, Bromo</p>
                </div>
              </div>

              <div
                className="testimoni__item d-flex flex-md-row flex-column align-items-center p-3"
                style={{ backgroundColor: "#F1F3FF" }}
              >
                <img src={image_person1} alt="" />
                <div className="d-flex flex-column testimoni__comment">
                  <svg
                    width="80"
                    height="16"
                    viewBox="0 0 80 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                      fill="#F9CC00"
                    />
                    <path
                      d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
                      fill="#F9CC00"
                    />
                    <path
                      d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
                      fill="#F9CC00"
                    />
                    <path
                      d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                      fill="#F9CC00"
                    />
                    <path
                      d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                  <p className="paragraph-font">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="paragraph-font">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
            <div className="testimoni__button d-flex flex-row">
              <button type="button" className="btn btn-left">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="15.5"
                    fill="white"
                    stroke="#C4C4C4"
                  />
                  <path
                    d="M18.5 21L13.5 16L18.5 11"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button type="button" className="btn btn-right">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="15.5" stroke="#C4C4C4" />
                  <path
                    d="M13.5 21L18.5 16L13.5 11"
                    stroke="#151515"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimoni;
