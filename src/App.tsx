import './App.css'

function App() {
  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#anasayfa">ASİL LOJİSTİK</a>

          <nav>
            <a href="#anasayfa">Ana Sayfa</a>
            <a href="#hakkimizda">Hakkımızda</a>
            <a href="#hizmetler">Hizmetlerimiz</a>
            <a href="#iletisim">İletişim</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="anasayfa" className="hero">
          <div className="container heroContent">
            <div className="heroImageWrap">
              <img
                src="/images/asil.jpeg"
                alt="Asil Lojistik depo ve forklift operasyonu"
              />
            </div>

            <div>
              <span className="eyebrow">Güvenilir • Hızlı • Profesyonel</span>
              <h1>Lojistik süreçlerinizde güçlü çözüm ortağınız.</h1>
              <p>
                Asil Lojistik; personel istihdamı, filo yönetimi, forklift ve
                manlift kiralama, depolama ve lojistik operasyonlarında
                işletmelere uçtan uca hizmet sunar.
              </p>

              <div className="heroActions">
                <a className="primaryButton" href="#hizmetler">Hizmetleri İncele</a>
                <a className="secondaryButton" href="#iletisim">Teklif Al</a>
              </div>
            </div>

          </div>
        </section>

        <section id="hakkimizda" className="section aboutSection">
          <div className="container aboutGrid">
            <div className="aboutContent">
              <span className="sectionLabel">Hakkımızda</span>
              <h2>Operasyonlarınızı güçlendiren güvenilir lojistik çözümler.</h2>

              <p>
                Asil Lojistik; farklı sektörlerde faaliyet gösteren işletmelerin
                operasyonel ihtiyaçlarına hızlı, güvenilir ve sürdürülebilir
                çözümler sunar.
              </p>

              <p>
                Doğru ekipman, planlı operasyon ve profesyonel hizmet anlayışıyla
                personel, filo, kiralama, depolama ve lojistik süreçlerinizi
                daha verimli hale getiriyoruz.
              </p>

              <div className="aboutHighlights">
                <span>Güvenilir Hizmet</span>
                <span>Profesyonel Operasyon</span>
                <span>İhtiyaca Özel Çözüm</span>
              </div>
            </div>

            <div className="aboutVisual">
              <img src="/images/personel.jpeg" alt="Asil Lojistik profesyonel operasyon ekibi" />
            </div>
          </div>
        </section>

        <section id="hizmetler" className="section servicesSection">
          <div className="container">
            <span className="sectionLabel">Hizmetlerimiz</span>
            <h2>İhtiyacınıza uygun profesyonel hizmetler</h2>

            <div className="servicesGrid">
              <article className="serviceCard">
                <img className="serviceImage" src="/images/personel.jpeg" alt="Personel İstihdamı" />
                <div className="icon">01</div>
                <h3>Personel İstihdamı</h3>
                <p>
                  Operasyonel ihtiyaçlarınıza uygun nitelikli personel
                  çözümleriyle iş gücü süreçlerinizi destekliyoruz.
                </p>
              </article>

              <article className="serviceCard">
                <img className="serviceImage" src="/images/filo.jpeg" alt="Binek Araç Filo Yönetimi" />
                <div className="icon">02</div>
                <h3>Binek Araç Filo Yönetimi</h3>
                <p>
                  Şirket filolarınızın planlama, yönetim ve operasyon
                  süreçlerinde verimli çözümler sunuyoruz.
                </p>
              </article>

              <article className="serviceCard">
                <img className="serviceImage" src="/images/forklift.jpeg" alt="Forklift ve Manlift Kiralama" />
                <div className="icon">03</div>
                <h3>Forklift & Manlift Kiralama</h3>
                <p>
                  Farklı kapasite ve ihtiyaçlara uygun ekipman seçenekleriyle
                  kısa ve uzun dönem kiralama hizmeti sağlıyoruz.
                </p>
              </article>

              <article className="serviceCard">
                <img className="serviceImage" src="/images/depo.jpeg" alt="Depolama Hizmetleri" />
                <div className="icon">04</div>
                <h3>Depolama Hizmetleri</h3>
                <p>
                  Ürün ve malzemeleriniz için düzenli, kontrollü ve
                  operasyonunuza uygun depolama çözümleri sunuyoruz.
                </p>
              </article>

              <article className="serviceCard">
                <img className="serviceImage" src="/images/lojistik.jpeg" alt="Lojistik ve Nakliye Hizmetleri" />
                <div className="icon">05</div>
                <h3>Lojistik & Nakliye Hizmetleri</h3>
                <p>
                  Sevkiyat ve taşıma süreçlerinizi planlayarak zamanında ve
                  güvenilir lojistik operasyonları gerçekleştiriyoruz.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="iletisim" className="section contactSection">
          <div className="container contactBox">
            <div>
              <span className="sectionLabel">İletişim</span>
              <h2>İhtiyacınızı anlatın, size özel çözüm oluşturalım.</h2>
              <p>
                Hizmetlerimiz hakkında bilgi almak veya teklif talep etmek için
                bizimle iletişime geçebilirsiniz.
              </p>

              <div className="contactDetails">
                <a href="tel:+905323833905">0532 383 39 05</a>
                <a href="mailto:nesetilica@outlook.com">nesetilica@outlook.com</a>
              </div>
            </div>

            <a className="primaryButton" href="mailto:nesetilica@outlook.com">
              Teklif Talep Et
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footerContent">
          <strong>ASİL LOJİSTİK</strong>
          <span>©️ 2026 Asil Lojistik. Tüm hakları saklıdır.</span>
        </div>
      </footer>
    </>
  )
}

export default App
