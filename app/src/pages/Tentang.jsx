import mahasiswa from '../../mahasiswa.json'
import './Tentang.css'

// Ganti dengan alamat repo fork kamu.
const REPO = 'https://github.com/qinbald/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section >
      <h1>Tentang</h1>
      <dl>
        <dt id="nama">Nama</dt>
        <dd id="isinama">{nama}</dd>
        <dt id="nim">NIM</dt>
        <dd id="isinim">{nim}</dd>
        <dt id="kelas">Kelas</dt>
        <dd id="isikelas">{kelas}</dd>
        <dt id="tema">Tema</dt>
        <dd id="isitema">{tema}</dd>
      </dl>
      <p id="repo">
        Kode sumber: <a href={REPO}>{REPO}</a>
      </p>
    </section>
  )
}