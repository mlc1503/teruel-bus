import './App.css'
import SearchTrip from './SearchTrip'
import Header from './Header'

const departures = Array.from({ length: 5 }, (_, index) => ({
  id: index,
  company: 'SAMAR',
  destination: 'Valencia',
  stops: 'Sarrión, Rubielos de Mora, Mora de Rubielos, Aín, Caudiel, Valencia',
  platform: '5',
  time: '10:40',
  delay: '0 min'
}))

function App() {
  return (
    <main className="app-shell">
      <Header/>
      <section className="page-content">
        <SearchTrip/>

        <section className="departures" aria-labelledby="departures-title">
          <div className="departures-heading">
            <h2 id="departures-title">Próximas salidas</h2>
            <p>Afectaciones al servicio</p>
          </div>
          <div className="departures-table" role="table" aria-label="Próximas salidas">
            <div className="departure-row departure-header" role="row">
              <span>Compañía</span>
              <span>Destino</span>
              <span>Paradas</span>
              <span>Dársena</span>
              <span>H. salida</span>
              <span>Retraso</span>
            </div>
            {departures.map((departure) => (
              <div className="departure-row" role="row" key={departure.id}>
                <span>{departure.company}</span>
                <span>{departure.destination}</span>
                <span>{departure.stops}</span>
                <span>{departure.platform}</span>
                <span>{departure.time}</span>
                <span>{departure.delay}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="news" aria-labelledby="news-title">
          <h2 id="news-title">Noticias</h2>
          <div className="news-body">
            <div className="news-image" aria-label="Imagen de la estación" role="img" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Placerat in id cursus mi pretium tellus duis. Urna tempor pulvinar vivamus fringilla lacus nec metus. Integer nunc posuere ut hendrerit semper vel class. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Mus donec rhoncus eros lobortis nulla molestie mattis. Purus est efficitur laoreet mauris pharetra vestibulum fusce. Sodales consequat magna ante condimentum neque at luctus. Ligula congue sollicitudin erat viverra ac tincidunt nam. Lectus commodo augue arcu dignissim velit aliquam imperdiet.
            </p>
          </div>
        </section>
      </section>
      <footer className="app-footer" aria-label="Pie de página" />
    </main>
  )
}

export default App
