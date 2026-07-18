
import { useMemo } from 'react'

const HomestayCard = ({ title, location, price, facilities }) => {
  return (
    <div className="homestay-card" role="article">
      <div className="homestay-card__top">
        <div className="homestay-card__title">{title}</div>
        <div className="homestay-card__meta">
          <span className="dot" aria-hidden="true" />
          {location}
        </div>
      </div>

      <div className="homestay-card__price">Mulai {price}/malam</div>

      <div className="homestay-card__facilities">
        {facilities.map((f) => (
          <span key={f} className="chip">
            {f}
          </span>
        ))}
      </div>

      <button className="btn btn-primary" type="button">
        Lihat detail
      </button>
    </div>
  )
}

export default function Home() {
  const homestays = useMemo(
    () => [
      {
        title: 'Homestay Rinjani',
        location: 'Kecamatan Pangururan',
        price: 'Rp 250.000',
        facilities: ['WiFi', 'Kamar mandi dalam', 'Sarapan'],
      },
      {
        title: 'Ndalem Sila',
        location: 'Dekat Danau Toba',
        price: 'Rp 300.000',
        facilities: ['Pemandangan', 'Area parkir', 'Listrik stabil'],
      },
      {
        title: 'Ompu Garing',
        location: 'Pusat kota',
        price: 'Rp 200.000',
        facilities: ['AC', 'WiFi', 'Ramah keluarga'],
      },
    ],
    [],
  )

  return (
    <main className="page">
      <section className="hero" aria-label="Hero">
        <div>
          <h1>Homestay Pasar Pangururan</h1>
          <p>
            Temukan penginapan nyaman dekat pusat aktivitas dan akses menuju objek wisata.
            Pilih homestay favoritmu untuk liburan yang lebih santai.
          </p>

          <div className="hero__actions">
            <button className="btn btn-primary" type="button">
              Lihat ketersediaan
            </button>
            <button className="btn" type="button">
              Hubungi admin
            </button>
          </div>
        </div>

        <div className="hero__side" aria-hidden="true">
          <div className="stat">
            <div className="stat__value">3+</div>
            <div className="stat__label">Pilihan homestay</div>
          </div>
          <div className="stat">
            <div className="stat__value">Cepat</div>
            <div className="stat__label">Respon admin</div>
          </div>
          <div className="stat">
            <div className="stat__value">Nyaman</div>
            <div className="stat__label">Untuk keluarga</div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Daftar homestay">
        <div className="section__header">
          <h2>Rekomendasi homestay</h2>
          <p>Berikut beberapa pilihan untuk memulai.</p>
        </div>

        <div className="homestay-toolbar" aria-label="Toolbar">
          <div className="homestay-toolbar__hint">Pilih homestay lalu lihat detail</div>
          <div className="homestay-toolbar__actions">
            <button className="btn" type="button">
              Filter
            </button>
            <button className="btn btn-primary" type="button">
              Urutkan
            </button>
          </div>
        </div>

        <div className="homestay-grid">
          {homestays.map((h) => (
            <HomestayCard key={h.title} {...h} />
          ))}
        </div>
      </section>

    </main>
  )
}

