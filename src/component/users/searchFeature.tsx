import React, {useEffect} from "react";

const SearchFeature: React.FC = () =>{
    return(
        <>
            <section id="search" className="search position-absolute start-50 translate-middle">
                <div className="container-xl d-flex justify-content-center">
                    <div className="serach__content shadow" style={{width: '1047px'}}>
                        <div className="d-flex flex-row justify-content-between" style={{padding: '24px'}}>
                            <div className="d-flex flex-column" style={{width: '210px'}}>
                                <div>
                                    <p className="paragraph-font">Tipe Driver</p>
                                </div>
                                <div>
                                    <div className="input-group">
                                        <select className="form-select" id="driverType">
                                        <option selected>Pilih Tipe Driver</option>
                                        <option value="dengan-sopir">Dengan Sopir</option>
                                        <option value="tanpa-sopir">Tanpa Driver(Lepas Kunci)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column" style={{width: '210px'}}>
                                <div>
                                    <p className="paragraph-font">Tanggal</p>
                                </div>
                                <div>
                                    <input type="date" className="form-control" id="carDate" />
                                </div>
                            </div>
                            <div className="d-flex flex-column" style={{width: '210px'}}>
                                <div>
                                    <p className="paragraph-font">Waktu Jemput</p>
                                </div>
                                <div>
                                    <select className="form-select" id="pickupTime">
                                        <option selected>Pilih Waktu</option>
                                        <option value="08.00">08.00 <span>WIB</span></option>
                                        <option value="09.00">09.00 <span>WIB</span></option>
                                        <option value="10.00">10.00 <span>WIB</span></option>
                                        <option value="11.00">11.00 <span>WIB</span></option>
                                        <option value="12.00">12.00 <span>WIB</span></option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex flex-column" style={{width: '210px'}}>
                                <div>
                                <p className="paragraph-font">Jumlah Penumpang (optional)</p>
                                </div>
                                <div>
                                <input type="number" className="form-control" min="0" id="passengerCount" />
                                </div>
                            </div>
                            <div className="align-content-end" >
                            <button id="searchCar" className="button navbar__button" type="submit" disabled>Cari Mobil</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SearchFeature;