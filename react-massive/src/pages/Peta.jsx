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
                  Indonesia Rawan Bencana
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

    <div class="container-xxl">
      <h2 class="blog-grid-title-lg mb-3" style={{color: "black"}}>Gempabumi Terkini (M ≥ 5.0)</h2>
      
      <table class="table table-striped table-hover">
        <thead>
        <tr>
        <th>No</th>
        <th>Waktu Gempa</th>
        <th>Lintang</th>
        <th>Bujur</th>
        <th>Magnitudo</th>
        <th>Kedalaman</th>
        <th>Wilayah</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>1</td>
        <td>11-12-23 <br/>17:16:40 WIB</td>
        <td>-0.49</td>
        <td>101.36</td>
        <td>5.8</td>
        <td>257 Km</td>
        <td>19 km BaratDaya KUANTANSINGINGI-RIAU</td>
        </tr>
        <tr>
        <td>2</td>
        <td>11-12-23 <br/>11:33:32 WIB</td>
        <td>2.62</td>
        <td>128.23</td>
        <td>5.3</td>
        <td>114 Km</td>
        <td>62 km TimurLaut PULAUDOI-MALUT</td>
        </tr>
        <tr>
        <td>3</td>
        <td>11-12-23 <br/>02:52:14 WIB</td>
        <td>-4.39</td>
        <td>139.67</td>
        <td>5.5</td>
        <td>72 Km</td>
        <td>19 km TimurLaut YAHUKIMO-PAPUAPGNGN</td>
        </tr>
        <tr>
        <td>4</td>
        <td>10-12-23 <br/>11:49:46 WIB</td>
        <td>-3.55</td>
        <td>141.05</td>
        <td>5.3</td>
        <td>105 Km</td>
        <td>39 km Tenggara KEEROM-PAPUA</td>
        </tr>
        <tr>
        <td>5</td>
        <td>07-12-23 <br/>20:09:44 WIB</td>
        <td>5.74</td>
        <td>125.50</td>
        <td>5.6</td>
        <td>12 Km</td>
        <td>206 km BaratLaut PULAUKARATUNG-SULUT</td>
        </tr>
        <tr>
        <td>6</td>
        <td>07-12-23 <br/>09:09:22 WIB</td>
        <td>-1.15</td>
        <td>126.83</td>
        <td>5.0</td>
        <td>10 Km</td>
        <td>92 km BaratDaya LABUHA-MALUT</td>
        </tr>
        <tr>
        <td>7</td>
        <td>05-12-23 <br/>19:36:37 WIB</td>
        <td>2.64</td>
        <td>128.24</td>
        <td>5.6</td>
        <td>18 Km</td>
        <td>64 km TimurLaut PULAUDOI-MALUT</td>
        </tr>
        <tr>
        <td>8</td>
        <td>03-12-23 <br/>09:39:57 WIB</td>
        <td>-2.69</td>
        <td>129.46</td>
        <td>5.2</td>
        <td>10 Km</td>
        <td>87 km TimurLaut MALUKUTENGAH</td>
        </tr>
        </tbody>
      </table>
    </div>

    <center><div class="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mt-2 mb-4" >Peta Rawan Bencana</div></center>
      
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
