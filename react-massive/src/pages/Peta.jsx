import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";
import Spinner from "../fragments/Spinner";

const Peta = () => {
  return (
    <>
      <Spinner />
      <Navbar />
      <div className="tentang"></div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                class="position-relative overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  class="position-absolute w-100 h-100 pt-5 pe-5"
                  src="img/gunungmeletus.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="h-100">
                <div class="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  Peta Rawan Bencana
                </div>
                <h1 class="display-6 mb-5">Jenis- Jenis Bencana Alam</h1>
                <div class="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <p class="text-dark mb-2">
                    Bencana alam atau dalam bahasa inggris Natural Disaster
                    adalah suatu peristiwa yang terbagi menjadi dua berdasarkan
                    pemicunya. Sedangkan menurut UU No. 24 Tahun 2007 tentang
                    Penanggulangan Bencana, bencana alam adalah bencana yang
                    diakibatkan oleh peristiwa atau serangkaian peristiwa yang
                    disebabkan oleh alam antara lain berupa gempa bumi, tsunami,
                    gunung meletus, banjir, kekeringan, angin topan, dan tanah
                    Longsor. kami memberikan peta rawan bencana dan membaginya
                    dalam daerah rawan bencana sesuai bencana alam yang terjadi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid bg-light overflow-hidden px-lg-0">
        <div class="container contact px-lg-0">
          <div class="row g-0 mx-lg-0">
            <div class="peta">
              <div class="map">
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=1jg4NJl5DR2XqcRNhtZ_WbtKO-E_cDTQ&noprof=1&"
                  width="100%"
                  height="600"
                ></iframe>
              </div>
              <div class="teks">
                <h2>Keterangan</h2>
                <br />

                <h4 style={{ fontSize: "large" }}>
                  {" "}
                  <img
                    src="img/icontsunami.png"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "70%",
                    }}
                    alt=""
                  />{" "}
                  Tsunami
                </h4>
                <h4 style={{ fontSize: "large", justifyContent: "right" }}>
                  {" "}
                  <img
                    src="img/icongempabumi.png"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "70%",
                    }}
                    alt=""
                  />{" "}
                  Gempa Bumi
                </h4>
                <h4 style={{ fontSize: "large", justifyContent: "right" }}>
                  {" "}
                  <img
                    src="img/icongunung.png"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "70%",
                    }}
                    alt=""
                  />{" "}
                  Gunung Meletus
                </h4>
                <h4 style={{ fontSize: "large", justifyContent: "right" }}>
                  {" "}
                  <img
                    src="img/icontanahlongsor.png"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "70%",
                    }}
                    alt=""
                  />{" "}
                  Tanah Longsor
                </h4>
                <h4 style={{ fontSize: "large", justifyContent: "right" }}>
                  {" "}
                  <img
                    src="img/iconbanjir.jpg"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "70%",
                    }}
                    alt=""
                  />{" "}
                  Banjir
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Peta;
