import React from 'react' ;

import TypedReact from './TypedReact'

class Projects extends React.Component {
  render(){
    return (
      <div>
        <div className='typew'>
          <TypedReact
            strings={[
              'We have experimented with  <i>Bitcoin</i>',
              'We have experimented with  <i>Deep Learning</i> ',
              'We have experimented with  <i>Classifiers</i>',
              'We have experimented with  <i>Digital Assets</i>',
              'We have experimented with  <i>Distributed Ledgers</i>'
            ]}
        />
        </div>
      </div>
    )
  }
}

export default Projects;
