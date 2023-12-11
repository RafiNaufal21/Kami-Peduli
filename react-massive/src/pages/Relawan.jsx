import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";
import Spinner from "../fragments/Spinner";
import { useState } from "react";
import axios from "axios";

const Relawan = () => {
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [email, setEmail] = useState("");
  const [nomortelepon, setNomortelepon] = useState("");
  const [kategori, setKategori] = useState("");
  const [fotodiri, setFotodiri] = useState("");
  const [alamat, setAlamat] = useState("");
  const [keahlian, setKeahlian] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // The result property contains the data URL
        const dataURL = reader.result;
        setFotodiri(dataURL);

        // Extract and set only the filename
        const fileName = file.name;
        console.log("Filename:", fileName);
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };
  const handleRegister = async () => {
    try {
      const response = await axios
        .post("http://localhost:5055/register-relawan", {
          nama,
          nik,
          jenis_kelamin: jenisKelamin,
          email,
          nomor_telepon: nomortelepon,
          kategori,
          fotodiri,
          alamat,
          keahlian,
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Spinner />
      <Navbar />
      <div className="container-fluid p-0 mb-0">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/relawan-2.png" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-3 animated slideInDown">
                        Ambil Peran Relawan Dan Bergabung Bersama Kami
                      </h1>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        Kami Relawan, Satu Hati, Satu Aksi.
                      </p>
                      <a
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href="#daftarrelawan"
                      >
                        Daftar Relawan
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid overflow-hidden my-5 px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <iframe
                  className="position-absolute img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src="https://www.youtube.com/embed/IJFVib4YiXA?si=mx44r7Fk-3jkjKyM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div
              className="col-lg-6 about-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="p-lg-5 pe-lg-0">
                <div
                  className="bg-primary mb-3"
                  style={{ width: "60px", height: "2px" }}
                ></div>
                <h1 className="display-5 mb-4">Sepuar Relawan</h1>
                <p className="mb-4 pb-2">
                  Kami Peduli Lingkungan Sekitar Dengan Memberikan Layanan
                  Relawan. Bagi orang-orang yang Ingin Menjadi sukarelawan Bisa
                  melakukan Pendaftaran Relawan.
                </p>
                <div className="row g-4 mb-4 pb-3">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center">
                      <div
                        className="btn-square bg-white rounded-circle"
                        style={{ width: " 64px", height: "64px" }}
                      >
                        <img
                          className="img-fluid"
                          src="img/icon1.png"
                          alt="Icon"
                        />
                      </div>
                      <div className="ms-4">
                        <h2 className="mb-1" data-toggle="counter-up">
                          257
                        </h2>
                        <p className="fw-medium text-primary mb-0">Relawan</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="d-flex align-items-center">
                      <div
                        className="btn-square bg-white rounded-circle"
                        style={{ width: "64px", height: "64px" }}
                      >
                        <img
                          className="img-fluid"
                          src="img/icon2.png"
                          alt="Icon"
                        />
                      </div>
                      <div className="ms-4">
                        <h2 className="mb-1" data-toggle="counter-up">
                          292
                        </h2>
                        <p className="fw-medium text-primary mb-0">
                          Pengguna website
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="" className="btn btn-primary rounded-pill py-3 px-5">
                  Jelajahi Lebih Lanjut
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <div
              className="bg-primary mb-3 mx-auto"
              style={{ width: "60px", height: "2px" }}
            ></div>
            <h1 className="display-5 mb-5">Our Services</h1>
          </div>
          <div className="row g-0 service-row">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="service-item border h-100 p-5">
                <center>
                  <div
                    className="btn-square bg-light rounded-circle mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src="img/icon5.png" alt="Icon" />
                  </div>
                </center>
                <center>
                  <h4 className="mb-3">Apa Itu Relawan</h4>
                </center>
                <center>
                  <p className="mb-4">
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem
                  </p>
                </center>
                <center>
                  <a className="btn" href="">
                    <i className="fa fa-arrow-right text-white me-3"></i>Lebih
                    Lanjut{" "}
                  </a>
                </center>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="service-item border h-100 p-5">
                <center>
                  <div
                    className="btn-square bg-light rounded-circle mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src="img/icon4.png" alt="Icon" />
                  </div>
                </center>
                <center>
                  {" "}
                  <h4 className="mb-3">Cara Menjadi Relawan</h4>
                </center>
                <center>
                  <p className="mb-4" style={{ textAlign: "center" }}>
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem
                  </p>
                </center>
                <center>
                  <a className="btn" href="">
                    <i className="fa fa-arrow-right text-white me-3"></i>Lebih
                    Lanjut{" "}
                  </a>
                </center>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="service-item border h-100 p-5">
                <center>
                  <div
                    className="btn-square bg-light rounded-circle mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src="img/icon3.png" alt="Icon" />
                  </div>
                </center>
                <center>
                  <h4 className="mb-3">Manfaat Relawan</h4>
                </center>
                <center>
                  <p className="mb-4">
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem
                  </p>
                </center>
                <center>
                  <a className="btn" href="">
                    <i className="fa fa-arrow-right text-white me-3"></i>Lebih
                    Lanjut{" "}
                  </a>
                </center>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <div className="service-item border h-100 p-5">
                <center>
                  <div
                    className="btn-square bg-light rounded-circle mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src="img/bnpb.png" alt="Icon" />
                  </div>
                </center>
                <center>
                  <h4 className="mb-3">Kerjasama Lembaga</h4>
                </center>
                <center>
                  <p className="mb-4">
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem
                  </p>
                </center>
                <center>
                  <a className="btn" href="">
                    <i className="fa fa-arrow-right text-white me-3"></i>Lebih
                    Lanjut{" "}
                  </a>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-light overflow-hidden my-5 px-lg-0"
        id="daftarrelawan"
      >
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="img/relawan1.jpg"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-6 quote-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="p-lg-5 pe-lg-0">
                <div
                  className="bg-primary mb-3"
                  style={{ width: "60px", height: "2px" }}
                ></div>
                <h1 className="display-5 mb-5">Pendafaran Gratis</h1>
                <p className="mb-4 pb-2">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo erat amet
                </p>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Nama"
                        style={{ height: "55px" }}
                        onChange={(e) => setNama(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Email"
                        style={{ height: "55px" }}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="NIK"
                        style={{ height: "55px" }}
                        onChange={(e) => setNik(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="No.Telp"
                        style={{ height: "55px" }}
                        onChange={(e) => setNomortelepon(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="Laki-laki"
                          onChange={(e) => setJenisKelamin(e.target.value)}
                        />
                        Laki-laki
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="Perempuan"
                          onChange={(e) => setJenisKelamin(e.target.value)}
                        />
                        Perempuan
                      </label>
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select border-0"
                        style={{ height: "55px" }}
                        onChange={(e) => setKategori(e.target.value)}
                      >
                        <option selected>Kategori Pendaftar</option>
                        <option value="Logistik">Logistik</option>
                        <option value="Pencarian dan Penyelamatan">
                          Pencarian dan Penyelamatan
                        </option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label for="formFile" className="form-label">
                        Foto Diri
                      </label>
                      <input
                        className="form-control"
                        style={{ backgroundColor: "white" }}
                        type="file"
                        id="formFile"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="col-12">
                      <label for="formFile" className="form-label">
                        Alamat
                      </label>
                      <textarea
                        className="form-control border-0"
                        placeholder="Alamat"
                        onChange={(e) => setAlamat(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <label for="formFile" className="form-label">
                        Keahlian
                      </label>
                      <textarea
                        className="form-control border-0"
                        placeholder="Keahlian"
                        onChange={(e) => setKeahlian(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        onClick={handleRegister}
                      >
                        Daftar Sekarang
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Relawan;
