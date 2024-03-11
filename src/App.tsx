import Changer from "./components/changer"
import Table from "./components/table"
import Time from "./components/time"

function App() {

  return (
    <>
      <h1 className="title">Расписание</h1>
      <div className="container">
        <Time/>
        <Table/>
      </div>
      <Changer/>
    </>
  )
}

export default App
