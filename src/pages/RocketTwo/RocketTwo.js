import React from 'react'
import './RocketTwo.scss'
import { gql,useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'



const GET_ROCKET_INFO3 = gql`
    query GET_ROCKET_INFO($rocketId:ID!) {
        rocket(id:$rocketId) {
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


export default function RocketTwo() {


    let { id } = useParams();
    

    const { data, loading, error } = useQuery(GET_ROCKET_INFO3, {
        variables: { rocketId:'falconheavy'},
    });
  return (
    <div className='Rockettwo' >

        <div className='s' >
        <p>Name :  {data?.rocket.name}</p>
        <p>Height :  {data?.rocket.height.feet}  Feet</p>
        <p>Engine Type :  {data?.rocket.engines.type}</p>
        <p>Cost per launch :  {data?.rocket.cost_per_launch}  Dollars </p>
        </div>
       
        </div>
  )

};
