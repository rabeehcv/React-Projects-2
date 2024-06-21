import React,{useState} from 'react';
import items from './data';
import { ImQuotesRight } from "react-icons/im";
import SingleItem from './component';

function App(){
const [people,setPeople] = useState(items);
const [index,setIndex] = useState(0);

  return(
    <section>
      <div className='title'>
        <h2>
          <span>/</span>Reviews - And the Mountains Echoed
        </h2>
        <div className='underline'></div>
      </div>
      <div className='section-center'>
        {people.map((person)=> {
          const {id,image,name,title,review} = person;
          return (
            <article key={id}>
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
      </div>
    </section>
  );
}

export default App;