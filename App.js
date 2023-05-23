import './App.css';
import { list } from './list';

export default function main() {
    const listItems = list.map(person =>
      
        <div>
          <p> Name:{person.name}<br/>
              Age:{person.age}<br/>
              Profession :{person.job}
          </p>
        </div>
      
    );
  return(
    <div className='App-header' >
    <h1>Employee Detail</h1>
      <ul>{listItems}</ul>
     </div>
  );
};
