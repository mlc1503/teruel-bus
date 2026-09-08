import './App.css'

function App() {

  return (
    <>
      <div className="w-full">
        <div className="board-header">
          <span>Código</span>
          <span>Destino</span>
          <span>Paradas</span>
          <span>Dársena</span>
          <span>H. Salida</span>
        </div>
        <div className="board-row">
          <span>IC 0123</span>
          <span>Madrid</span>
          <span className="min-w-0 overflow-x-auto whitespace-nowrap scrollbar-none">Cella, Sarrión, Rubielos de Mora, Mora de Rubielos, Sagunto, Valencia</span>
          <span>4</span>
          <span>14:35</span>
        </div>
        <div className="board-row">
          <span>RE 4821</span>
          <span>Alicante</span>
          <div className="min-w-0 overflow-hidden">
            <div className="flex w-max animate-stops-scroll">
              <span className="whitespace-nowrap">
                Valencia · Cuenca · Requena · Utiel · Camporrobles · Madrid
              </span>

              <span className="ml-8 whitespace-nowrap">
                Valencia · Cuenca · Requena · Utiel · Camporrobles · Madrid
              </span>
            </div>
          </div>
          <span>7</span>
          <span>14:52</span>
        </div>
        <div className="board-row">
          <span>EU 0091</span>
          <span>Barcelona</span>
          <span className="min-w-0 overflow-x-auto whitespace-nowrap scrollbar-none">Tarragona</span>
          <span>2</span>
          <span>15:10</span>
        </div>
      </div>
    </>
  )
}

export default App
