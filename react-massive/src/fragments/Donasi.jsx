import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const InfoDonasi = () => {
  return (
    <>
    <style>
      
    </style>
      <Navbar />
      <div className="tentang"></div>
      <div className="container-xxl bg-light py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  Donasi
                </div>
                <h1 className="display-6 mb-5">
                  Kami Membantu Orang-Orang Yang Terdampak Bencana Alam
                </h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <p className="text-dark mb-2">
                    Dengan menyediakan fitur donasi kami siap membantu para
                    korban bencana alam
                  </p>
                  <span className="text-primary">Kami Peduli</span>
                </div>
                <p className="mb-5">
                  Dengan memberikan sumbangan, kita dapat membantu memulihkan
                  daerah yang terdampak bencana alam. Mari berdonasi sekarang
                  untuk membantu mereka yang membutuhkan
                </p>
                
                <Link to={"/donasi"}
                  className="btn btn-primary py-2 px-3 me-3"
                  href="/donasi"
                >
                  Donasi Sekarang
                  <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100 pt-5 pe-5"
                  src="img/infodonasi.png"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 py-5 causes">
        <div className="container-xxl py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ "max-width": "500px" }}
          >
            <div
              className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-"
              style={{ "font-size": "large" }}
            >
              Lembaga Yang Bertanggung Jawab
            </div>
            <h3 className="display-6 mb-5">
              Donasi Yang Kami Terima Akan Kami Salurkan Ke Lembaga Terkait
            </h3>
          </div>
          <div className="row g-1 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp px-2"
              data-wow-delay="0.1s"
            >
              <div
                className="causes-item d-flex flex-column bg-white border-5 rounded-top overflow-hidden h-100"
                style={{ boxShadow: "0px 3px 5px rgba(110, 110, 110, 0.8)" }}
              >
                <div className="position-relative">
                  <img className="img-fluid" src="img/infodonasi1.png" alt="" />
                </div>
                <div className="iconlike">
                  <i
                    className="bi bi-heart"
                    id="likeBtn"
                    onclick="toggleLike()"
                  ></i>
                  <span className="like" id="likeCount">
                    101
                  </span>
                </div>
                <div className="p-4 pt-3" style={{ textAlign: "justify" }}>
                  <h5 className="mb-3">Donasi Kepada Masyarakat NTB</h5>
                  <p>
                    {" "}
                    masyarakat di wilayah NTB, bantuan sembako yang telah
                    diberikan berupa beras, minyak goreng, sarden sebanyak 200
                    pack dan makanan instan sebanyak 1000 pcs kepada masyarakat
                    di Bima, NTB. Dompet Amal TRANSMEDIA mengajak kita semua
                    untuk peduli dan membantu saudara-saudara di NTT, NTB dan
                    Malang. Donasi dapat disalurkan ke rekening di bawah ini,
                    donasi yang masuk akan disalurkan bekerjasama dengan CT ARSA
                    Foundation.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp px-2"
              data-wow-delay="0.1s"
            >
              <div
                className="causes-item d-flex flex-column bg-white border-5 rounded-top overflow-hidden h-100"
                style={{ boxShadow: "0px 3px 5px rgba(110, 110, 110, 0.8)" }}
              >
                <div className="position-relative">
                  <img className="img-fluid" src="img/infodonasi2.png" alt="" />
                </div>
                <div className="iconlike">
                  <i
                    className="bi bi-heart"
                    id="likeBtn1"
                    onclick="toggleLike1()"
                  ></i>
                  <span className="like" id="likeCount1">
                    111
                  </span>
                </div>
                <div className="p-4 pt-3" style={{ textAlign: "justify" }}>
                  <h5 className="mb-3">
                    Pembuatan Posko Kami Peduli di Kota Palu
                  </h5>
                  <p>
                    {" "}
                    posko untuk korban gempa dan tsunami di Balai Transmigrasi
                    Kota Palu, Sulawesi Tengah. Menteri Desa, Pembangunan Daerah
                    Tertinggal dan Transmigrasi (Mendes PDTT) Eko Putro Sandjojo
                    meyakini, posko yang didirikan itu dapat menampung hingga
                    2.000 pengungsi.Artikel ini telah tayang di Kompas.com
                    dengan judul "Posko Bencana Kemendes PDTT di Palu Mampu
                    Tampung 2.000 Pengungsi"
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp px-2"
              data-wow-delay="0.1s"
            >
              <div
                className="causes-item d-flex flex-column bg-white border-5 rounded-top overflow-hidden h-100"
                style={{boxShadow: "0px 3px 5px rgba(110, 110, 110, 0.8)"}}
              >
                <div className="position-relative">
                  <img className="img-fluid" src="img/infodonasi3.png" alt="" />
                </div>
                <div className="iconlike">
                  <i
                    className="bi bi-heart"
                    id="likeBtn2"
                    onclick="toggleLike2()"
                  ></i>
                  <span className="like" id="likeCount2">
                    121
                  </span>
                </div>
                <div className="p-4 pt-3" style={{ textAlign: "justify" }}>
                  <h5 className="mb-3">Donasi bencana di aceh</h5>
                  <p>
                    {" "}
                    Kabar duka tersiar dari Aceh Timur yang diterjang banjir
                    akibatnya 6.003 rumah warga yang berada di tujuh kecematan
                    di Kabupaten Aceh Timur, Aceh harus terendam air. Sebanyak
                    2.751 warga juga harus tinggal sementara di pengungsian.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default InfoDonasi;
