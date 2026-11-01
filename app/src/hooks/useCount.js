import {useState} from 'react';

export default function useCount(nilaiAwal = 0){
    const [angka, setJumlah] = useState(nilaiAwal);

    const tambah = () => setJumlah((prev) => prev + 1);

    const kurang = () => setJumlah((prev) => (prev > 0 ? prev-1 : 0));

    const reset = () => setJumlah(nilaiAwal);
    return {angka, tambah, kurang, reset}
}