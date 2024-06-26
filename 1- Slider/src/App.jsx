import React,{useState, useEffect} from 'react';
import items from './data';
import { ImQuotesRight } from "react-icons/im";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

function App(){
  const [people,setPeople] = useState(items);
  const [index,setIndex] = useState(0);

  useEffect(() => {
    const lastIndex=people.length-1;
    if(index<0){
      setIndex(lastIndex);
    }
    if(index>lastIndex){
      setIndex(0);
    }
  }, [index,people] );

  useEffect(()=>{
    let slider = setInterval(()=>{
      setIndex(index+1);
    },3000);
    return ()=> clearInterval(slider);
  },[index]);


  return(
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews - And the Mountains Echoed
        </h2>
        <div className='underline'></div>
      </div>
      <div className='section-center'>
        {people.map((person,personIndex)=> {
          const {id,image,name,title,review} = person;
          let position="nextSlide";
          if(personIndex===index){
            position='activeSlide';
          }
          if(personIndex===index-1 || (index===0 && personIndex===people.length-1)){
            position='lastSlide';
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={title} className='person-img'/>
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{review}</p>
              <div className="icon-container">
                <ImQuotesRight className="quote-icon" />
              </div>
            </article>
          )
        })}
        <button className="prev" onClick={()=>setIndex(index-1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={()=>setIndex(index+1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
