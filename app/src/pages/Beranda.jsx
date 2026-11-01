// Buat tujuh berkas ini di src/pages/ dengan isi sementara seperti ini.
// Isinya diganti satu per satu saat mengikuti panduan setiap halaman.
import {useContext} from 'react';
import {KoleksiContext} from '../context/koleksiContext.js';
import useSearchBuku from '../hooks/useSearchBuku.js';
import mahasiswa from '../../mahasiswa.json'
import {Link} from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js';
import useCount from '../hooks/useCount.js';
import './Beranda.css'
import useHitungKoleksi from '../hooks/useHitungKoleksi.js';

export default function Beranda() {
  const {items, loading} = useKoleksi();

  const {kataKunci, setKataKunci, bukuDicari} = useSearchBuku(items || []);

  const {jumlahBuku, jumlahKategori} = useHitungKoleksi(items || []);
  return (
    <section>
        <h1 className="beranda">Beranda</h1>
        <p className="tema">Tema: {mahasiswa.tema}</p>
        {loading ? (
            <p>Memuat ringkasan...</p>
        ):(
            <p className="isi-data">
                Ada <span id="jumlahbuku">{jumlahBuku}</span> buku dalam <span id="jumlahkategori">{jumlahKategori} </span> kategori.
            </p>
        )}
        <Link to="/koleksi" className="link">Lihat semua buku</Link>
    </section>
    );
}