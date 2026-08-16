
"use client";

import React from "react";
import Link from "next/link";

export default function CountriesJurisdictionsPage() {
  return (
    <main>


    <div className="breadcrumb__area dark-green breadcrumb-space overflow-hidden custom-width position-relative z-1" data-background="/assets/imgs/breadcrumb/breadcrumb.png">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-12">
                    <div className="breadcrumb__content">
                        <div className="breadcrumb__title-wrapper mb-15 mb-sm-10 mb-xs-5">
                            <h1 className="breadcrumb__title color-white wow fadeInLeft animated" data-wow-delay=".2s">Countries</h1>
                        </div>
                        <div className="breadcrumb__menu wow fadeInLeft animated" data-wow-delay=".3s">
                            <nav>
                                <ul>
                                    <li><span><a href="/">Home</a></span></li>
                                    <li className="active"><span>Countries</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* countries start */}
    <section className="countries section-space tab overflow-hidden">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <ul className="nav nav-tabs countries__tab tab__wrap"  id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="active tab__btn pb-20" id="asia-tab" data-bs-toggle="tab" data-bs-target="#asia" type="button" role="tab" aria-controls="asia" aria-selected="true">
                                Asia
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="pb-20"  id="europe-tab" data-bs-toggle="tab" data-bs-target="#europe" type="button" role="tab" aria-controls="europe" aria-selected="true">
                                Europe
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="pb-20"  id="north-america-tab" data-bs-toggle="tab" data-bs-target="#north-america" type="button" role="tab" aria-controls="north-america" aria-selected="true">
                                North America
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="pb-20"  id="australia-tab" data-bs-toggle="tab" data-bs-target="#australia" type="button" role="tab" aria-controls="australia" aria-selected="true">
                                Australia
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="pb-20"  id="latin-america-tab" data-bs-toggle="tab" data-bs-target="#latin-america" type="button" role="tab" aria-controls="latin-america" aria-selected="true">
                                Latin America
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button id="africa-tab" data-bs-toggle="tab" data-bs-target="#africa" type="button" role="tab" aria-controls="africa" aria-selected="true">
                                Africa
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-8">
                    <div className="tab-content" >
                        <div className="tab-pane fade show active" id="asia" role="tabpanel" aria-labelledby="asia-tab">
                            <div className="countries__tab-content">
                                <div className="countries__tab-content__countries-name  mb-30 d-flex">
                                    <img src="/assets/imgs/countrie/russia.png" alt="" />
                                    <h5>Russia</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex">
                                    <img src="/assets/imgs/countrie/japan.png" alt="" />
                                    <h5>Japan</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex">
                                    <img src="/assets/imgs/countrie/egypt.png" alt="" />
                                    <h5>Egypt</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex">
                                    <img src="/assets/imgs/countrie/south-korea.png" alt="" />
                                    <h5>South Korea</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex">
                                    <img src="/assets/imgs/countrie/indonesia.png" alt="" />
                                    <h5>Indonesia</h5>
                                </div>
                                <div className="countries__tab-content__countries-name d-flex">
                                    <img src="/assets/imgs/countrie/turkey.png" alt="" />
                                    <h5>Turkey</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex">
                                    <img src="/assets/imgs/countrie/thailand.png" alt="" />
                                    <h5>Thailand</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex">
                                    <img src="/assets/imgs/countrie/china.png" alt="" />
                                    <h5>China</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex">
                                    <img src="/assets/imgs/countrie/india.png" alt="" />
                                    <h5>India</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex">
                                    <img src="/assets/imgs/countrie/malaysia.png" alt="" />
                                    <h5>Malaysia</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex">
                                    <img src="/assets/imgs/countrie/cambodia.png" alt="" />
                                    <h5>Cambodia</h5>
                                </div>
                                <div className="countries__tab-content__countries-name d-flex">
                                    <img src="/assets/imgs/countrie/myanmar.png" alt="" />
                                    <h5>Myanmar</h5>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="europe" role="tabpanel" aria-labelledby="europe-tab">
                            <div className="countries__tab-content">
                                <div className="countries__tab-content__countries-name  mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/germany.png" alt="" />
                                    <h5>Germany</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/russia.png" alt="" />
                                    <h5>Russia</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/italy.png" alt="" />
                                    <h5>Italy</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/switzerland.png" alt="" />
                                    <h5>Switzerland</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/sweden.png" alt="" />
                                    <h5>Sweden</h5>
                                </div>
                                <div className="countries__tab-content__countries-name  d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/greece.png" alt="" />
                                    <h5>Greece</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30  d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/belgium.png" alt="" />
                                    <h5>Belgium</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30  d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/croatia.png" alt="" />
                                    <h5>Croatia</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30  d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/norway.png" alt="" />
                                    <h5>Norway</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30  d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/denmark.png" alt="" />
                                    <h5>Denmark</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30  d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/iceland.png" alt="" />
                                    <h5>Iceland</h5>
                                </div>
                                <div className="countries__tab-content__countries-name  d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/hungary.png" alt="" />
                                    <h5>Hungary</h5>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="north-america" role="tabpanel" aria-labelledby="north-america-tab">
                           <div className="countries__tab-content">
                                <div className="countries__tab-content__countries-name  mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/united-states.png" alt="" />
                                    <h5>United States</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/bahamas.png" alt="" />
                                    <h5>Bahamas</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/dominican-republic.png" alt="" />
                                    <h5>Dominican Republic</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie//jamaica.png" alt="" />
                                    <h5>Jamaica</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/belize.png" alt="" />
                                    <h5>Belize</h5>
                                </div>
                                <div className="countries__tab-content__countries-name d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/honduras.png" alt="" />
                                    <h5>Honduras</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/panama.png" alt="" />
                                    <h5>Panama</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/barbados.png" alt="" />
                                    <h5>Barbados</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/guadeloupe.png" alt="" />
                                    <h5>Guadeloupe</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/grenada.png" alt="" />
                                    <h5>Grenada</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/montserrat.png" alt="" />
                                    <h5>Montserrat</h5>
                                </div>
                                <div className="countries__tab-content__countries-name d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/sint-maarten.png" alt="" />
                                    <h5>Sint Maarten</h5>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="australia" role="tabpanel" aria-labelledby="australia-tab">
                           <div className="countries__tab-content">
                                <div className="countries__tab-content__countries-name  mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/australia.png" alt="" />
                                    <h5>Australia</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/nauru.png" alt="" />
                                    <h5>Nauru</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/papua.png" alt="" />
                                    <h5>Papua New Guinea</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/micronesia.png" alt="" />
                                    <h5>Micronesia</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/tuvalu.png" alt="" />
                                    <h5>Tuvalu</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/kiribati.png" alt="" />
                                    <h5>Kiribati</h5>
                                </div>
                                <div className="countries__tab-content__countries-name d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/new-zealand.png" alt="" />
                                    <h5>New Zealand</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/solomon-islands.png" alt="" />
                                    <h5>Solomon-Islands</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/fiji.png" alt="" />
                                    <h5>Fiji</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/new-south-wales.png" alt="" />
                                    <h5>New South Wales</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/ashmore-and-cartier-islands.png" alt="" />
                                    <h5>Cartier Islands</h5>
                                </div>
                                <div className="countries__tab-content__countries-name d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/united-states.png" alt="" />
                                    <h5>United states</h5>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="latin-america" role="tabpanel" aria-labelledby="latin-america-tab">
                           <div className="countries__tab-content">
                                <div className="countries__tab-content__countries-name  mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/argentina.png" alt="" />
                                    <h5>Argentina</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/brazil.png" alt="" />
                                    <h5>Brazil</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/venezuela.png" alt="" />
                                    <h5>Venezuela</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/uruguay.png" alt="" />
                                    <h5>Uruguay</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/colombia.png" alt="" />
                                    <h5>Colombia</h5>
                                </div>
                                <div className="countries__tab-content__countries-name d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/martinique.png" alt="" />
                                    <h5>Martinique</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/peru.png" alt="" />
                                    <h5>Peru</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/barbuda.png" alt="" />
                                    <h5>Barbuda</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/el-salvador.png" alt="" />
                                    <h5>El Salvador</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/puerto-rico.png" alt="" />
                                    <h5>Puerto Rico</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/saint-barthelemy.png" alt="" />
                                    <h5>Saint Barthélemy</h5>
                                </div>
                                <div className="countries__tab-content__countries-name d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/ecuador.png" alt="" />
                                    <h5>Ecuador</h5>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="africa" role="tabpanel" aria-labelledby="africa-tab">
                           <div className="countries__tab-content">
                                <div className="countries__tab-content__countries-name  mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/south-africa.png" alt="" />
                                    <h5>South Africa</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/uganda.png" alt="" />
                                    <h5>Uganda</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/ethiopia.png" alt="" />
                                    <h5>Ethiopia</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/ghana.png" alt="" />
                                    <h5>Ghana</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/morocco.png" alt="" />
                                    <h5>Morocco</h5>
                                </div>
                                <div className="countries__tab-content__countries-name d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/tanzania.png" alt="" />
                                    <h5>Tanzania</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/senegal.png" alt="" />
                                    <h5>Senegal</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/niger.png" alt="" />
                                    <h5>Niger</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/rwanda.png" alt="" />
                                    <h5>Rwanda</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/somalia.png" alt="" />
                                    <h5>Somalia</h5>
                                </div>
                                <div className="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/guinea.png" alt="" />
                                    <h5>guinea</h5>
                                </div>
                                <div className="countries__tab-content__countries-name d-flex wow fadeInLeft animated">
                                    <img src="/assets/imgs/countrie/gabon.png" alt="" />
                                    <h5>gabon</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    </main>
  );
}
