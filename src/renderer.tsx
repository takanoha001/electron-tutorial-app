import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Test } from './components/Test';
import { RadioButton } from './components/RadioButton';
import TestStateMachine from './components/TestStateMachine';



//todo add more in index.html
ReactDOM.render(
  <Test />,
    document.querySelector('#test')
    );

    ReactDOM.render(
      <TestStateMachine />,
        document.querySelector('#testStateMachine')
        );

// ReactDOM.render(
//   <RadioButton />,
//     document.querySelector('#radioButton')
// );
