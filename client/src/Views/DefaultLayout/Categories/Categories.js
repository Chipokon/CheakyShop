import { Carousel } from 'antd';
const contentStyle = {
  height: '260px',
  color: "white",
  fontSize: "22px",
  backgroundColor: "white",
  textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
  lineHeight: '380px',
  textAlign: 'center',
  background: '#364d79',
  backgroundImage: "url('https://img3.akspic.ru/previews/5/1/1/3/7/173115/173115-anime-simpatichnye_devushki_anime-devushka_gejmer-devchushki_devushka-kavajnaya-550x310.jpg')",
};
const Categories = () => (
  <Carousel autoplay style={{display: "fixed", margin: "0 auto", "margin-top": "250px", width: "533px"}}>
    <div>
      <h3 style={contentStyle} >WoW</h3>
    </div>
    <div>
      <h3 style={contentStyle}>LineAge</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Dota</h3>
    </div>
    <div>
      <h3 style={contentStyle}>PoEbota</h3>
    </div>
  </Carousel>
);
export default Categories;