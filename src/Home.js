import React from 'react';
import { Route, Link } from 'react-router-dom';

import TypedReact from './TypedReact'
import BackGround from './BackGround'


class Home extends React.Component {
  render(){
    return(
      <div className="home">

        <div className = "typew">
          <span className = "tag-line"></span>
          <TypedReact
            strings={[
              'Innovation is <i>Free Will</i>',
              'Innovation is <i>Passion</i> ',
              'Innovation is <i>Fun</i>',
              'Innovation is <i>Messy</i>',
              'Innovation is <i>CRDP</i>',
              'Innovation is <i>CitiConnectForBlockchain</i>',
              'Innovation is <i>Nexus</i>',
              'Innovation is <i>Signer</i>',
              'Innovation is <i>Octopus</i>',
              'Innovation is <i>Bonafide</i>',
              'Innovation is <i>Templar</i>',
              'Innovation is <i>About Disruption</i>',
              'Innovation is <i>New Business Models</i>',
              'Innovation is <i>Challenging Status Quo</i>',
              'Innovation is <i>Unpredictable</i>',
              'Innovation is <i>about asking What\'s Next ?</i>',
              'Innovation <i>Cannot Be Stopped</i>'
            ]}
        /></div>

        <h3 id = "expertise">Our Expertise</h3>

        <div className='homecontent'>

          <div className='hc2'>
            <Link to={'/ai'} >Artificial Intelligence</Link>
          </div>
          <div className='hc4'>
            <Link to={'/banking'} >Banking </Link>
          </div>
          <div className='hc1'>
            <Link to={'/dlt'} >Blockchain </Link>
          </div>
          <div className='hc3'>
            <Link to={'/design'} >Design Thinking</Link>
          </div>



        </div>

      </div>
    )
  }
}

export default Home;
