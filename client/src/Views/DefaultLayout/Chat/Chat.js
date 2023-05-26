import { observer } from 'mobx-react-lite'
import React from 'react'
const chatStyles ={
    position: "fixed",
    color : "#000",
    top: "100px",
    right:"55px",
    border: "1px solid black",
    width: "300px",
    height: "770px",
    background: "#ccc"
}
const Chat = observer( () => {
  return (
    <div style={chatStyles}>Здесь должен быть гигачат</div>
  )
})

export default Chat