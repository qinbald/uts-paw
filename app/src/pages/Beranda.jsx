// Buat tujuh berkas ini di src/pages/ dengan isi sementara seperti ini.
// Isinya diganti satu per satu saat mengikuti panduan setiap halaman.
import {useContext} from 'react';
import {KoleksiContext} from '../context/koleksiContext';
import useSearchBuku from '../hooks/useSearchBuku';

export default function Beranda() {
  const {items} = useContext(KoleksiContext);
  const {kataKunci, setKataKunci, bukuDicari} = useSearchBuku(items || []);
  return <h1>Beranda</h1>
}