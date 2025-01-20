import React, { useState } from 'react';
import './Contact.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fungsi untuk format tanggal
    const formatDate = (date) => {
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    };

    const formDataToSend = new FormData();
    formDataToSend.append('timestamp', formatDate(new Date())); // Format tanggal di sini
    formDataToSend.append('nama', formData.nama);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('pesan', formData.pesan);

    fetch('https://script.google.com/macros/s/AKfycby8AA3BnyrkRiqxGM84Q0kpXaQoB-tLHNQC_Jau_yacx2Fv9QWandnAiSS3fJKClKHf/exec', {
      method: 'POST',
      mode: 'no-cors',
      body: formDataToSend,
    })
      .then((response) => {
        Swal.fire({
          title: 'Berhasil!',
          text: 'Pesan Anda telah dikirim.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        setFormData({ nama: '', email: '', pesan: '' });
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Terjadi kesalahan saat mengirim pesan.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'white' : '' }}>Kontak Saya</span>
          <span>Hubungi Saya</span>
          <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
        </div>
      </div>

      <div className="c-right">
        <form onSubmit={handleSubmit}>
          <input type="text" name="nama" className="user" placeholder="Nama" value={formData.nama} onChange={handleChange} />
          <input type="email" name="email" className="user" placeholder="Email" value={formData.email} onChange={handleChange} />
          <textarea name="pesan" className="user" placeholder="Pesan" value={formData.pesan} onChange={handleChange} />
          <input type="submit" value="Send" className="button" />
          <div className="blur c-blur1" style={{ background: 'var(--purple)' }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
