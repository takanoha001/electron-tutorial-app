import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Test } from './components/Test';
import { RadioButton } from './components/RadioButton';
import { SetIP } from './components/SetIP';



//todo add more in index.html
ReactDOM.render(
  <Test />,
    document.querySelector('#test')
    );

ReactDOM.render(
  <RadioButton />,
    document.querySelector('#radioButton')
);

ReactDOM.render(
  <SetIP />,
    document.querySelector('#setIP')
);