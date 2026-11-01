import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: '', Penulis : '', tahunTerbit: '', status: 'Sedang dibaca' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Tugas</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} placeHolder="Contoh: Aroma Karsa"/>
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <input type="text" id="kategori" name="kategori" value={form.kategori} onChange={ubah} placeholder="Contoh: Romansa" list="opsi-kategori"/>
      <datalist id="opsi-kategori">
        <option>Sejarah</option>
        <option>Manga</option>
        <option>Misteri</option>
      </datalist>
        
      <label htmlFor="penulis">Penulis</label>
      <input id="penulis" name="penulis" value={form.penulis} onChange={ubah} placeHolder="Contoh: Dee Lestari"/>
      
      <label htmlFor="tahunTerbit">Tahun Terbit</label>
      <input type="text" id="tahunTerbit" name="tahunTerbit" value={form.tahunTerbit} onChange={ubah} placeHolder="Contoh: 2018" autoComplete="off"/>

      <label htmlFor="prioritas">Status</label>
      <select id="prioritas" name="status" value={form.status} onChange={ubah}>
        <option value="selesai dibaca">Selesai dibaca</option>
        <option value="selesai dibaca">Sedang dibaca</option>
        <option value="wishlist">Wishlist</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}