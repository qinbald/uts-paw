import useKoleksi from './useKoleksi';

export default function useHitungKoleksi() {
  const { items: daftarBuku, loading, error } = useKoleksi();

  const jumlahBuku = daftarBuku ? daftarBuku.length : 0;
  
  const jumlahKategori = daftarBuku
    ? new Set(daftarBuku.map((buku) => buku.kategori)).size
    : 0;

  return { jumlahBuku, jumlahKategori, loading, error };
}