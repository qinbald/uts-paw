// Buat tujuh berkas ini di src/pages/ dengan isi sementara seperti ini.
// Isinya diganti satu per satu saat mengikuti panduan setiap halaman.
import {useContext} from 'react';
import {KoleksiContext} from '../context/koleksiContext.js';
import useSearchBuku from '../hooks/useSearchBuku.js';
import mahasiswa from '../../mahasiswa.json'
import {Link} from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Beranda() {
  const {items} = useContext(KoleksiContext);
  const {kataKunci, setKataKunci, bukuDicari} = useSearchBuku(items || []);
  return (
    <section>
        <h1>Beranda</h1>
        <p>Tema: {mahasiswa.tema}</p>
        {loading ? (
            <p>Memuat ringkasan...</p>
        ):(
            <p>
                Ada {item.lengths} buku dalam {jumlahKategori} kategori.
            </p>
        )}
        <Link to="/koleksi">Lihat semua buku</Link>
    </section>
    )
}