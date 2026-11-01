import {useState} from 'react';

export default function useCount(nilaiAwal = 0){
    const [angka, setJumlah] = useState(nilaiAwal);

    const tambah = () => setJumlah((sebelumnya) => sebelumnya + 1);

    const kurang = () => setJumlah((sebelumnya) => (sebelumnya > 0 ? sebelumnya-1 : 0));

    const reset = () => setJumlah(nilaiAwal);
    return {angka, tambah, kurang, reset}
}