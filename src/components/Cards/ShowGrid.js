import React from 'react'
import ShowCard from './ShowCard'
import { Col, Row } from 'antd';
const ShowGrid = ({data}) => {

  return (
    <Row> 
    {data.map((item)=>(
      
      <Col xs={24} lg={8} xl={6}>
      <ShowCard 
        key={item.id} 
        ids={item.id}
        name={item.name} 
        email={item.email} 
        phone={item.phone} 
        website={item.website} 
        username={item.username}
        />
        
        </Col>
     

        
    )
    )
    }
    </Row> 
  
  )
}

export default ShowGrid