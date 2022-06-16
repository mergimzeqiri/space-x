import React from 'react'
import './RocketOne.scss'
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';



const GET_ROCKET_INFO = gql`
    query GET_ROCKET_INFO($rocketId: ID!) {
        rocket(id: $rocketId) {
            name
            height {
                feet
                meters
            }
            diameter {
                feet
                meters
            }
            stages
            cost_per_launch
            engines {
                type
                number
                propellant_1
                propellant_2
                thrust_to_weight
            }
        }
    }
`;

export default function RocketOne() {


    let { id } = useParams();
    


    const { data, loading, error } = useQuery(GET_ROCKET_INFO, {
        variables: { rocketId:'falcon9' },
    });
  return (
    <div className='Rocketone' >

        <div className='w' >
        <p>Name :  {data?.rocket.name}</p>
        <p>Height:   {data?.rocket.height.feet}  Feet</p>
        <p>Engine Type:{data?.rocket.engines.type}</p>
        <p>Cost per launch:{data?.rocket.cost_per_launch}  Dollars</p>
        </div>
        {/* <img src={main}/> */}
       
        </div>
  )

};
