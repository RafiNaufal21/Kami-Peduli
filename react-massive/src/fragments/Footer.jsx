const Footer = () => {
  return (
    <>
      <div
        class="container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h1 class="text-white">
                Kami<span class="fw-bold text-primary mb-4">Peduli</span>
              </h1>
              <p>
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita
              </p>
              <div class="d-flex pt-2">
                <a class="btn btn-square me-1" href="">
                  <i class="fab fa-instagram"></i>
                </a>
                <a class="btn btn-square me-1" href="">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-square me-1" href="">
                  <i class="fab fa-youtube"></i>
                </a>
                <a class="btn btn-square me-0" href="">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Alamat</h5>
              <p>
                <i class="fa fa-map-marker-alt me-3"></i>Kota Palu, Sulawesi
                Tengah, Indonesia
              </p>
              <p>
                <i class="fa fa-phone-alt me-3"></i>+62 822-7337-0260
              </p>
              <p>
                <i class="fa fa-envelope me-3"></i>kamipeduli@gmail.com
              </p>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Halaman</h5>
              <a class="btn btn-link" href="">
                Beranda
              </a>
              <a class="btn btn-link" href="">
                Kategori
              </a>
              <a class="btn btn-link" href="">
                Peta
              </a>
              <a class="btn btn-link" href="">
                Tentang
              </a>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light m-4">Daftar</h5>
              <p>Ayo kita saling membantu sesama</p>
              <div class="position-relative mx-auto" style={{"max-width": "400px"}}>
                <input
                  class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Email"
                />
                <button
                  type="button"
                  class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  Daftar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-6 text-center text-md-start mb-3 mb-md-0"></div>
              <center>
                <div class="text-center">
                  Designed By <a>Ekosaviors</a>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
