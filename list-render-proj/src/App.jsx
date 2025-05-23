import './App.css'
import List from './components/List'

function App() {

  const movies = [
    {id: 1, movie: "Maharishi", actor: "Mahesh Babu"},
    {id: 2, movie: "Srimanthudu", actor: "Mahesh Babu"},
    {id: 3, movie: "Brahmotsavam", actor: "Mahesh Babu"},
    {id: 4, movie: "Varisu", actor: "Vijay Thalapathy"},
    {id: 5, movie: "96", actor: "Vijay Sethupati"},
    {id: 6, movie: "Dynamite", actor: "Vishnu Manchu"},
    {id: 7, movie: "Check", actor: "Nithin"},
    {id: 8, movie: "Skanda", actor: "ram Potheneni"},
    {id: 9, movie: "Chanakya", actor: "Gopichanda"},
    {id: 10, movie: "Ala Vaikunthpuramulao", actor: "Allu Arjun"}
  ]

  return (
    <div className='main-div'>
      <h1>List Rendering With Map & Key 📃</h1>
      <section>
        <table>
        <thead>
          <tr>
            <td>SR.No</td>
            <td>Movie Name</td>
            <td>Actor Name</td>
          </tr>
        </thead>
        <List movies={movies}/>
        </table>
      </section>
    </div>
  )
}

export default App


