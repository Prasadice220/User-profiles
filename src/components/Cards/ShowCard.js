import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { MailOutlined,PhoneOutlined,GlobalOutlined } from '@ant-design/icons';
import EditModal from '../modals/EditModal';
import Likes from '../Like/Likes';
import Delete from '../Delete/Delete';

const { Meta } = Card;
const ShowCard = ({name,email,phone,website,username,ids}) => {
  
    const image = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`
  return (
    <Card
    style={{ margin:15 }}
    cover={
        <div className='cardHeadImage' style={{textAlign:'center',backgroundColor: '#f5f5f5'}}>
            <img
        alt="example"
        src={image}
        style={{width:200, height:200}}
      />
        </div>
      
    }
    actions={[
      
      <Likes ide={ids}/>,
      <EditModal ide={ids}key="setting" />,
      <Delete ide={ids} />,
    ]}
  >

    <Meta

      title={name}
      description={(<><h4><MailOutlined /> {email}</h4>
      <h4><PhoneOutlined /> {phone}</h4>
      <h4><GlobalOutlined /> {`http://${website}`}</h4></>)}
    />
  </Card>
  
    
  )
}

export default ShowCard