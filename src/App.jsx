import { useState } from 'react'
import './styles/App.css'
import { Header } from './components/Header'
import { UploadSection } from './components/UploadSection'
import { BandCard } from './components/BandCard'
import { QuickInfo } from './components/QuickInfo'
import { UpcomingTours } from './components/UpcomingTours'
import { Discography } from './components/Discography'
import { Biography } from './components/Biography'
import { HighlightedData } from './components/HighlightedData'
import { bandData } from './data/bandData'

function App() {
  const [uploadedImage, setUploadedImage] = useState(null)

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        {/* Top Section - Upload and Band Card */}
        <section className="top-section">
          <div className="upload-area">
            <UploadSection onImageUpload={setUploadedImage} />
          </div>
          <div className="band-area">
            <BandCard band={bandData} uploadedImage={uploadedImage} />
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="quick-info-area">
          <QuickInfo band={bandData} />
        </section>

        {/* Upcoming Tours Section */}
        <section className="tours-area">
          <UpcomingTours tours={bandData.upcomingTours} />
        </section>

        {/* Bottom Sections - Grid Layout */}
        <section className="bottom-sections">
          <Discography discography={bandData.discography} />
          <Biography band={bandData} />
          <HighlightedData highlights={bandData.highlights} />
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>RockInfo © 2024 | Todos los derechos reservados</p>
        <p>Hecho con ❤️ para los amantes del rock</p>
      </footer>
    </div>
  )
}

export default App
