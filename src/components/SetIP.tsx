import { ipcRenderer } from 'electron';
import React from 'react';

export class SetIP extends React.Component {
  
  render()
  {
    //todo implement the body 
    return (
      <div className="SetIP">
        <header className="SetIP-header">
        <form> 
          <div>      
            <label>Enter MTA Address</label>
            <input type="text " id="itemMain" autoFocus/>
          </div>
          <button type="submit">add item</button>
       </form>
      </header>
     </div>
    );
  }
}