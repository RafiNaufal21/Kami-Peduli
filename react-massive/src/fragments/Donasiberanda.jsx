import React from "react";
import Button from "../components/button/button";
import "../css/style.css";

const Donasiberanda = () => {
    return (
        <div class="container-fluid donate my-5 py-5" data-parallax="scroll" data-image-src="img/carousel-2.jpg" id="donasi">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Donasi Yuk</div>
                    <h1 class="display-6 text-white mb-5">Terima kasih atas Sumbangsi bersama Anda</h1>
                    <p class="text-white-50 mb-0">Bagi kita mungkin kecil tetapi bagi mereka yang sangat membutuhkan itu mempunyai nilai yang sangat berharga</p>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div class="h-100 bg-white p-5">
                        <form>
                            <div class="row g-3">
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control bg-light border-0" id="name" placeholder="Your Name"/>
                                        <label for="name" style={{opacity :0.1, color :"Black"}}>Nama</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="email" class="form-control bg-light border-0" id="email" placeholder="Your Email"/>
                                        <label for="email" style={{opacity :0.1, color :"Black"}}>Email</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control bg-light border-0" id="email" placeholder="Your Email"/>
                                        <label for="Nominal" style={{opacity :0.1, color :"Black"}} >Rp.</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                <Button variant="btn btn-primary px-5">
                                        Donasi Sekarang  
                                </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Donasiberanda;