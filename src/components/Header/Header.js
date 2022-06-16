import React from 'react'
import { Link } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client';
import './Header.scss'

const GET_ROCKETS_NAMES = gql`
    {
        rockets(offset: 1) {
            id
            name
        }
    }
`;
export default function Header () {
    const { data, loading, error } = useQuery(GET_ROCKETS_NAMES);
if(loading)return <p>LOADING PLEASE WAIT ....</p>
if(error)return <p>error...</p>
  return (
    <header>
    <div className='container'>

        <ul>
            <li><Link to='/'>HomePage</Link></li>
            <li><Link to='/rocket/falcon9'>Falcon 9</Link></li>
            <li><Link to='/rocket/falconheavy'>Falcon Heavy</Link></li>
            <li><Link to='/rocket/starship'>Starship</Link></li>  
        </ul>
        </div>
    </header>
  )
}
