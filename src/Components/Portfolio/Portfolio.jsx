import React, { useState } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import halaman1 from '../../img/PemesananTiket/1.png';
import halaman2 from '../../img/PemesananTiket/2.png';
import halaman3 from '../../img/PemesananTiket/3.png';
import halaman4 from '../../img/PemesananTiket/4.png';
import halaman5 from '../../img/PemesananTiket/5.png';
import halaman6 from '../../img/PemesananTiket/6.png';
import halaman7 from '../../img/PemesananTiket/7.png';
import halaman8 from '../../img/PemesananTiket/8.png';
import halaman9 from '../../img/PemesananTiket/9.png';
import halaman10 from '../../img/PemesananTiket/10.png';
import halaman11 from '../../img/PemesananTiket/11.png';
import halaman12 from '../../img/PemesananTiket/12.png';
import halaman13 from '../../img/PemesananTiket/13.png';
import halaman14 from '../../img/PemesananTiket/14.png';
import halaman15 from '../../img/PemesananTiket/15.png';
import halaman16 from '../../img/PemesananTiket/16.png';
import halaman17 from '../../img/PemesananTiket/17.png';
import halaman18 from '../../img/PemesananTiket/18.png';
import halaman19 from '../../img/PemesananTiket/19.png';
import halaman20 from '../../img/PemesananTiket/20.png';
import halaman21 from '../../img/PemesananTiket/21.png';
import halaman22 from '../../img/PemesananTiket/22.png';
import halamanawal from '../../img/WebGIS/halamanawal.png';
import halamandiskusi from '../../img/WebGIS/halamandiskusi.png';
import halamanpeta from '../../img/WebGIS/halamanpeta.png';
import berandapelayan from '../../img/myresto/pelayan/berandapelayan.png';
import mejapelayan from '../../img/myresto/pelayan/meja.png';
import tambahmeja from '../../img/myresto/pelayan/tambahmeja.png';
import detailpemesanan from '../../img/myresto/pelayan/detailpemesanan.png';
import tambahpemesanan from '../../img/myresto/pelayan/tambahpemesanan.png';
import pemesananpelayan from '../../img/myresto/pelayan/pemesananpelayan.png';
import berandakoki from '../../img/myresto/koki/beranda koki.png';
import detailmenu from '../../img/myresto/koki/detailmenu.png';
import detailpemesanankoki from '../../img/myresto/koki/detailpemesanan.png';
import loginmyresto from '../../img/myresto/koki/login.png';
import menukoki from '../../img/myresto/koki/menukoki.png';
import pemesanankoki from '../../img/myresto/koki/pemesanan.png';
import tambahmenu from '../../img/myresto/koki/tambahmenu.png';
import berandakasir from '../../img/myresto/kasir/berandakasir.png';
import daftarmeja from '../../img/myresto/kasir/daftarmeja.png';
import detailpembayaran from '../../img/myresto/kasir/detailpembayaran.png';
import laporan from '../../img/myresto/kasir/laporan.png';
import pembayaran from '../../img/myresto/kasir/pembayaran.png';
import halamanawalhotel from '../../img/reservasihotel/halaman awal.png';
import register from '../../img/reservasihotel/register.png';
import loginhotel from '../../img/reservasihotel/login.png';
import pilihkamar from '../../img/reservasihotel/pilihkamar.png';
import halamanawallogin from '../../img/reservasihotel/halamanawallogin.png';
import pemesananhotel from '../../img/reservasihotel/pemeasanan.png';
import pembayaranhotel from '../../img/reservasihotel/pembayaran.png';
import konfirmasipembayaran from '../../img/reservasihotel/konfirmasi pembayaran.png';
import menungguverifikasi from '../../img/reservasihotel/menunggu verifikasi.png';
import setelahverifikasi from '../../img/reservasihotel/setalah verifikasi.png';
import berandahotel from '../../img/reservasihotel/admin/beranda.png';
import datakamar from '../../img/reservasihotel/admin/datakamar.png';
import editkamar from '../../img/reservasihotel/admin/editkamar.png';
import tambahkamar from '../../img/reservasihotel/admin/tambahkamar.png';
import detailpembayaranhotel from '../../img/reservasihotel/admin/detailpembayaran.png';
import konfirmasiadmin from '../../img/reservasihotel/admin/konfirmasi pemesanan.png';
import transaksiberhasil from '../../img/reservasihotel/admin/transaksi berhasil.png';
import transaksibatal from '../../img/reservasihotel/admin/transaksi batal.png';
import cetaklaporanbatal from '../../img/reservasihotel/admin/cetak laporan batal.png';
import cetaklaporanberhasil from '../../img/reservasihotel/admin/cetak laporan berhasil.png';

const Portfolio = () => {
  const [modalData, setModalData] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const projects = [
    {
      title: 'Aplikasi Pemesanan Tiket Bus Memanfaatkan API Midtran Sebagai Payment Gateway dan Pemantauan Posisi Bus Menggunakan GPS',
      description:
        'Aplikasi ini dibuat menggunakan teknologi ExpressJS sebagai Backend dan NextJS sebagai Frontend. Untuk GPS memanfaatkan dari API Geolocation HTML5 kemudian di tampilkan dalam Peta/Map menggunakan Mapbox API. Untuk menyimpan data posisi bus nya menggunakan Firebase Realtime Database. Menggunakan PostgreSQL untuk menyimpan data lainnya selain data posisi bus.',
      images: [
        halaman1,
        halaman2,
        halaman3,
        halaman4,
        halaman5,
        halaman6,
        halaman7,
        halaman8,
        halaman9,
        halaman10,
        halaman11,
        halaman12,
        halaman13,
        halaman14,
        halaman15,
        halaman16,
        halaman17,
        halaman18,
        halaman19,
        halaman20,
        halaman21,
        halaman22,
      ],
    },
    {
      title: 'Web GIS Daerah Rawan Kriminalitas',
      description:
        'Aplikasi ini dibuat menggunakan teknologi CodeIgniter 4. Untuk menampilkan titik titik daerah rawan kriminalitas pada peta memanfaatkan kan LeafletJS dan menyimpan data menggunakan database MySQL. Menampilkan informasi terkini juga dengan memanfaatkan API berita.',
      images: [halamanpeta, halamandiskusi, halamanawal],
    },
    {
      title: 'Sistem Informasi Manajemen Restoran',
      description:
        'Aplikasi manajemen restoran yang terdiri dari 3 role yaitu pelayan, kasir, dan koki. Role pelayan bisa melakukan pemesanan untuk konsumen dan bisa menambahkan meja. Role koki bisa melihat pemesanan yang telah dilakukan oleh pelayan, melakukan tambah menu, mengubah menu. Role kasir bisa mengatur apakah konsumen dengan nomor meja tersebut sudah melakukan pembayaran atau belum, dan bisa mencetak laporan harian, mingguan, bulanan, dan tahunan dalam bentuk excel, pdf, atau cetak langsung. Aplikasi ini dibuat menggunakan bahasa pemrograman PHP dengan framework CodeIgniter 4 dan menggunakan database MySQL untuk menyimpan data.',
      images: [
        berandapelayan,
        mejapelayan,
        tambahmeja,
        detailpemesanan,
        tambahpemesanan,
        pemesananpelayan,
        berandakoki,
        detailmenu,
        detailpemesanankoki,
        loginmyresto,
        menukoki,
        pemesanankoki,
        tambahmenu,
        berandakasir,
        daftarmeja,
        detailpembayaran,
        laporan,
        pembayaran,
      ],
    },
    {
      title: 'Aplikasi Pemesanan Hotel',
      description:
        'Aplikasi pemesanan hotel ini terdiri dari 2 role yaitu konsumen dan admin. Role konsumen bisa melakukan pemesanan hotel sesuai dengan keinginan jika masih tersedia dan melakukan pembayaran. Role admin bisa menambahkan data kamar, edit data kamar, konfirmasi pembayaran, dan cetak laporan transaksi. Aplikasi ini dibuat menggunakan bahasa pemrograman PHP Native dengan database MySQL untuk menyimpan datanya',
      images: [
        halamanawalhotel,
        register,
        loginhotel,
        pilihkamar,
        halamanawallogin,
        pemesananhotel,
        pembayaranhotel,
        konfirmasipembayaran,
        menungguverifikasi,
        setelahverifikasi,
        berandahotel,
        datakamar,
        editkamar,
        tambahkamar,
        detailpembayaranhotel,
        konfirmasiadmin,
        transaksiberhasil,
        transaksibatal,
        cetaklaporanbatal,
        cetaklaporanberhasil,
      ],
    },
  ];

  const openModal = (project) => {
    setModalData(project);
    setActiveImage(project.images[0]); // Gambar pertama sebagai default
  };

  const closeModal = () => {
    setModalData(null);
    setActiveImage(null);
  };

  const handleThumbnailClick = (image) => {
    setActiveImage(image);
  };

  return (
    <div className="portfolio" id="Portfolio">
      {/* Heading */}
      <span> </span>
      <span>Projects</span>

      {/* Slider */}
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="portfolio-slider">
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <img src={project.images[0]} height={213} alt={project.title} onClick={() => openModal(project)} style={{ cursor: 'pointer' }} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {modalData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <h1 style={{ color: 'black', fontWeight: 'bold' }}>{modalData.title}</h1>
            <p style={{ color: 'var(--gray)', fontSize: '18px' }}>{modalData.description}</p>
            <div className="modal-main-image">
              <img src={activeImage} alt="Main display" />
            </div>
            <div className="modal-thumbnails">
              <Swiper spaceBetween={5} slidesPerView={8} navigation modules={[Navigation]} className="thumbnail-slider">
                {modalData.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt={`Thumbnail ${index}`} onClick={() => handleThumbnailClick(img)} className={activeImage === img ? 'active' : ''} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
