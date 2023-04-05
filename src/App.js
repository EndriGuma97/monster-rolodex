// import { Component } from 'react';
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';

import logo from './logo.svg';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setvalue]
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters)
  
  console.log('render');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFilterMonsters(newFilteredMonsters)
  }, [monsters, searchField])
  
  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString)
    // this.setState(() => {
    //   return { searchField }
    // })
  }

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
    // this.setState(() => {
    //   return { searchField }
    // })
  }

  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      
      <SearchBox
      className='title-search-box'
      onChangeHandler={onTitleChange}
      placeholder='set title'
      />


      <br />

      <SearchBox
      className='monsters-search-box'
      onChangeHandler={onSearchChange}
      placeholder='search monsters'
      />
      
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//   };

//   }

//   componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then((users) => this.setState(() => {
//       return {monsters: users}
//     }
//     )
//     )

//   }

//   onSearchChange = (event) => {
//     // console.log(event.target.value);
    
//     const searchField = event.target.value.toLocaleLowerCase();

   

//     this.setState(() => {
//       return { searchField }
//     })
   
    
    
//   }
  
//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//      })

//    return (
//     <div className='App'>
//       <h1 className='app-title'>Bobat e Fierit</h1>
     
//       {/* { filteredMonsters.map((monster) => {
//         return (
//           <div key={monster.id}>
//             <h1>{monster.name}</h1>
//           </div>
//         )
//       })} */}
//       <SearchBox 
//       className='monsters-search-box'
//       onChangeHandler={onSearchChange} placeholder="Search monsters"/>
//       <CardList 
//        monsters={filteredMonsters}
//        />
//     </div>
//    )
//    }
// }

export default App;