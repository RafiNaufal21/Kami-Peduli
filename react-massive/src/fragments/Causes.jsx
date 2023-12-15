import React from "react";

const Causes = () => {
  return (
    <div className="container-xxl bg-light my-5 py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Informasi
          </div>
          <h1 className="display-6 mb-5">Berbagai Bencana Alam</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {/* Repeat this block for each disaster */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Gempa Bumi</small>
                </div>
                <h5 class="mb-3">Sulawesi Tengah</h5>
                  <p>Pada 28 September 2018, pukul 18.02 WITA, gempa bermagnitudo 7,4  Palu dan Donggala, Sulawesi Tengah. Pusat gempa dilaporkan berada 26 km utara Donggala dan 80 km barat laut Kota Palu.</p>
                  <div class="causes-progress bg-light p-3 pt-2">
                  <p>KORBAN JIWA</p>
                  <div className="d-flex justify-content-between">
                    <p className="text-dark">
                      1.000 <small className="text-body">Jiwa</small>
                    </p>
                    <p className="text-dark">
                      10.000 <small className="text-body">jiwa</small>
                    </p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "40%" }}
                    >
                      <span>2.045 jiwa</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-relative mt-auto">
                <img className="img-fluid" src="img/gempabumi.jpg" alt="" />
                <div className="causes-overlay">
                  <a className="btn btn-outline-primary" href="">
                    Lebih Lanjut
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat this block for each disaster */}
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div class="text-center p-4 pt-0">
                <div class="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Tsunami</small>
                </div>
                <h5 class="mb-3">Sumatera Barat</h5>
                            <p>Gempa tektonik berkekuatan 7,2 skala richter (SR) melanda Kepulauan Mentawai, Sumatera Barat pada 25 Oktober 2010, katau tepat 11 tahun silam. Gempa bumi yang memicu gelombang tsunami ini terjadi.</p>
                            <div class="causes-progress bg-light p-3 pt-2">
                                <p>KORBAN JIWA</p>
                                <div class="d-flex justify-content-between">
                                    <p class="text-dark">1.000 <small class="text-body">Jiwa</small></p>
                                    <p class="text-dark">10.000 <small class="text-body">jiwa</small></p>
                                </div>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "15%" }}
                    >
                      <span>509 jiwa</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="position-relative mt-auto">
                <img class="img-fluid" src="img/tsunami.jpg" alt="" />
                <div class="causes-overlay">
                  <a class="btn btn-outline-primary" href="">
                    Lebih Lanjut
                    <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i class="fa fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div class="text-center p-4 pt-0">
                <div class="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Tanah Longsor</small>
                </div>
                <h5 class="mb-3">Jawa Tengah</h5>
                            <p>Telah terjadi banjir dan tanah longsor di Kecamatan Tembalang dan Banyumanik Kota Semarang pada tanggal 06 Januari 2023 pukul 15.00 WIB. Akibat kejadian ini 42 Kepala keluarga terdampak banjir dengan ketinggian air 50-250 cm.</p>
                            <div class="causes-progress bg-light p-3 pt-2">
                                <p>KERUSAKAN RUMAH</p>
                                <div class="d-flex justify-content-between">
                                    <p class="text-dark">100 <small class="text-body">Rumah</small></p>
                                    <p class="text-dark">1.000 <small class="text-body">Rumah</small></p>
                                </div>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "25%" }}
                    >
                      <span>128 Rumah</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="position-relative mt-auto">
                <img class="img-fluid" src="img/longsor.jpg" alt="" />
                <div class="causes-overlay">
                  <a class="btn btn-outline-primary" href="">
                    Lebih Lanjut
                    <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i class="fa fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div class="text-center p-4 pt-0">
                <div class="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Banjir</small>
                </div>
                <h5 class="mb-3">Jawa Tengah</h5>
                            <p>Kawasan Kecamatan Margadana, Kota Tegal, terendam banjir. Akibatnya sebanyak 450 rumah terendam banjir dan 182 warga terpaksa mengungsi.</p>
                            <div class="causes-progress bg-light p-3 pt-2">
                                <p>KERUSAKAN RUMAH</p>
                                <div class="d-flex justify-content-between">
                                    <p class="text-dark">100 <small class="text-body">Rumah</small></p>
                                    <p class="text-dark">1.000 <small class="text-body">Rumah</small></p>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    >
                      <span>450 Rumah</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="position-relative mt-auto">
                <img class="img-fluid" src="img/banjir.jpg" alt="" />
                <div class="causes-overlay">
                  <a class="btn btn-outline-primary" href="">
                    Lebih Lanjut
                    <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i class="fa fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div class="text-center p-4 pt-0">
                <div class="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Gunung Meletus</small>
                </div>
                <h5 class="mb-3">Bali</h5>
                            <p>Gunung Agung terletak di Bali, Indonesia, dan meletus terakhir kali pada 2017. Letusan tersebut menyebabkan evakuasi.</p>
                            <div class="causes-progress bg-light p-3 pt-2">
                                <p>EVAKUASI WARGA</p>
                                <div class="d-flex justify-content-between">
                                    <p class="text-dark">10.000 <small class="text-body">Warga</small></p>
                                    <p class="text-dark">100.000 <small class="text-body">Warga</small></p>
                                </div>
                                <div class="progress">
                                  <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    >
                      <span>40.000 warga</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="position-relative mt-auto">
                <img class="img-fluid" src="img/gunungmeletus.jpg" alt="" />
                <div class="causes-overlay">
                  <a class="btn btn-outline-primary" href="">
                    Lebih Lanjut
                    <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i class="fa fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Causes;
