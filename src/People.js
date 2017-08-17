import React from 'react' ;

import TypedReact from './TypedReact'

import cillogo from './cillogo.png'
import vin from './vin.jpg'

class People extends React.Component {

  constructor(props){
    super(props)
  }

  state = {
    people: [
      {'name': "Vineet Kumar Singh",
      'image' : vin,
      'spec': "Blockchain, AI",
      'bio' : "Software Developer"},
      {'name': "Vineet Kumar Singh",
      'image' : vin,
      'spec': "Blockchain, AI",
      'bio' : "Software Developer"},
      {'name': "Vineet Kumar Singh",
      'image' : vin,
      'spec': "Blockchain, AI",
      'bio' : "Software Developer"},
      {'name': "Vineet Kumar Singh",
      'image' : vin,
      'spec': "Blockchain, AI",
      'bio' : "Software Developer"},
      {'name': "Vineet Kumar Singh",
      'image' : vin,
      'spec': "Blockchain, AI",
      'bio' : "Software Developer"},
      {'name': "Vineet Kumar Singh",
      'image' : vin,
      'spec': "Blockchain, AI",
      'bio' : "Software Developer"},
      {'name': "Vineet Kumar Singh",
      'image' : vin,
      'spec': "Blockchain, AI",
      'bio' : "Software Developer"},
      {'name': "Vineet Kumar Singh",
      'image' : vin,
      'spec': "Blockchain, AI",
      'bio' : "Software Developer"},
      {'name': "Vineet Kumar Singh",
      'image' : vin,
      'spec': "Blockchain, AI",
      'bio' : "Software Developer"}

    ]
  }

  render(){
    return (
      <div className='people'>
        <div className='typew'>
          <TypedReact
            strings={[
              'We are  <i>Designer</i>',
              'We are  <i>Architects</i> ',
              'We are  <i>Blockchain Experts</i>',
              'We are  <i>Data Scientists</i>',
              'We are  <i>Legal Experts</i>',
              'We Have <i>Three Phds</i>',
              'We Have <i>Numerous Masters</i>',
              'People Here have worked as <i>Country Heads</i>'
            ]}
          />
        </div>
        <ul className='people-container'>
          {this.state.people.map((person) => (
            <li>
              <div className ='card'>
                <div className='image'>
                  <img  className ='avatar' src={person.image} alt='vineet' />
                </div>
                <div className='name'>
                  {person.name}
                </div>
                <div className='spec'>
                  {person.spec}
                </div>
                <div className='bio'>
                  {person.bio}
                </div>
              </div>
          </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default People;
