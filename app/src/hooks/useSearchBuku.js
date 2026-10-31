import {useState, useMemo} from 'react';

export default function useSearchBuku(daftarBuku) {
    const [kataKunci, setKataKunci] = useState('');
    const bukuDicari = useMemo(()=>{
        if (!kataKunci) return daftarBuku;

        return daftarBuku.filter((buku)=>
            buku.judul.toLowerCase().includes(kataKunci.toLowerCase())
        );
    }, [daftarBuku, kataKunci]);

    return {kataKunci, setKataKunci, bukuDicari};
}
