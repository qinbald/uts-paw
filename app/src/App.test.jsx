import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'
import TidakDitemukan from './pages/TidakDitemukan.jsx'
import KotakPencarian from './components/KotakPencarian.jsx'
import Tentang from './pages/Tentang.jsx'

// Contoh test. Tambahkan minimal 5 test buatan sendiri (butir rubrik F1).
test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('KotakPencarian menampilkan nilai yang sesuai input', () => {
  render(<KotakPencarian nilai="Kingdom" onUbah={() => {}}/>)
})

test('Halaman tentang berisikan judul atau konten', () => {
  render(
    <MemoryRouter>
      <Tentang/>
    </MemoryRouter>
  )
  expect(screen.getByRole('heading', {level:1})).toBeInTheDocument()
})


