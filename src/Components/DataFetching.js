import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import './style.css';
function DataFetching() {

  const [data, setData] = useState([])
  const [filter, setFilter] = useState('');
  // const DisplayData = data.map(data=>{
  //   return (
  //     <div>{data}</div>
  //   )
  // })

  // const fetchData = () =>{
  //   const url ="https://assets.g2g.com/offer/keyword.json";
  //   fetch(url)
  //     .then((res)=>{
  //       return res.json();
  //     })
  //     .then((data) =>{
  //       console.log(data);
  //       Object.entries(data).forEach(([key, value]) => {
    
  //         var gameName = value['default_name'];
  //         setData(gameName);
  //         console.log(gameName);
  //       });
  //     })
  // }

  // fetchData();

  const apiGet = () =>{
    fetch("https://assets.g2g.com/offer/keyword.json")
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      // setData(data);
     const displayName = [];
     Object.entries(data).forEach(([key, value]) => {
      var gameName = value['default_name'];
      displayName.push(gameName);
      setData(displayName);
      });
      // const output = displayName.map((data) => {
      //   return (
      //     <div>{data}</div>
      //   )
      // })
     
    })
  }

  useEffect(() => {
    apiGet();
  },[])



  const filterHandler = e => {
    console.log(e.target.value);
    setFilter(e.target.value);
   }

  return (
    
    <div className="container">
         <input type="text" value={filter} onChange={filterHandler}/>
      <ul>

        {data.filter(e => e.includes(filter) || filter === '').map((name,index)=> ( <li key={index}>{name}</li>))}
        
      </ul>
    </div>
  )
}

export default DataFetching