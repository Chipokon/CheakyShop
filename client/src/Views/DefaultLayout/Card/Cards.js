import React from 'react';
import { Card } from 'antd';
import { observer } from 'mobx-react-lite';

const { Meta } = Card;

const Cards = observer (({el}) => {
  console.log(" CARD",el)
  return ( <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={el?.name} description={el?.cost} />
    {/* {console.log("ELEMENT CARD",el)} */}
  </Card>)
}
);

export default Cards;
