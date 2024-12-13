import './App.css'
import Header from './component/header';
import Discord from './component/discord';

export default function App() {
  return (
    <div className={"__container__"}>
      <Header />
      <p className={"WE2d9W3"} style={{"color": "white"}}>Rise For Roblox</p>
      <p className={"X2wD0sk"}>A Roblox utility modification to<br/>dominate your opponents!</p>
      <br/>
      <a className={"d0A231X"} href="https://raw.githubusercontent.com/SpeedSonic0MC/RiseForRoblox/main/loadstring" target="_blank" rel={"noreferrer"}>Get Rise <span className={"cxlxl"}>➜</span></a>
      <h1 style={{"textAlign": "center", "paddingTop": "4rem", "fontSize": "60px"}}>Features</h1>
      <div className={"features"}>
        {/** Interface Themes */}
        <div className={"feature"}>
          <div className={"featureText"}>
            <h3 className={"featureTextTitle"}>Interface Themes</h3>
            <p>There are diverse themes for you to choose from to change the Click GUI's look</p>
            <ul>
              <li>38 Themes for you to choose from</li>
              <li>Filter themes by key colors</li>
              <li>Click on a theme to use it</li>
            </ul>
          </div>
          <div className={"featureImage"}><img src={"/Themes.png"} width={"100%"} alt={"Themes"} /></div>
        </div>
        {/** Adaptable */}
        <div className={"feature reverse"}>
          <div className={"featureText"}>
            <h3 className={"featureTextTitle"}>Adaptable</h3>
            <p>Rise for Roblox is built for different servers. For example</p>
            <ul>
              <li>Bedwars</li>
              <li>Pet Simulator 99</li>
              <li>More Coming Soon...</li>
            </ul>
          </div>
          <div className={"featureImage"}><img src={"/Adaptable.png"} width={"100%"} alt={"Adaptable"} /></div>
        </div>
        {/** Languages */}
        <div className={"feature"}>
          <div className={"featureText"}>
            <h3 className={"featureTextTitle"}>Multi-Language</h3>
            <p>Rise for Roblox provides multiple language support.</p>
            <ul>
              <li>English (Global)</li>
              <li>Chinese (Traditional)</li>
              <li>More Coming Soon...</li>
            </ul>
          </div>
          <div className={"featureImage"}><img src={"/Languages.png"} width={"100%"} alt={"Languages"} /></div>
        </div>
      </div>
      <h1 style={{"textAlign": "center"}}>Wanna take a look?</h1>
      <p style={{ "textAlign": "center", "fontSize": "18px", "marginBottom": "50px" }}>This is the Rise for Roblox trailer.</p>
      <h2 style={{ "textAlign": "center" }}>Coming Soon...</h2>
      {/**<video controls={true}>
        <source src="/showcase.mp4" type="video/mp4"/>
        This browser does not support video tags.
      </video>*/}
      <Discord />
      <div style={{"paddingBottom": "20px"}} />
    </div>
  )
}