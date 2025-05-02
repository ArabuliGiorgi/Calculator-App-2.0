import { useEffect, useState } from "react"
import { Time } from "./styled/styledElements";
import darkCellular from "/images/black cellular.png"
import lightCellular from "/images/white cellular.png"
import darkWifi from "/images/black wi-fi.png"
import lightWifi from "/images/white wi-fi.png"
import darkBattery from "/images/black battery.png"
import lightBattery from "/images/white battery.png"
import Calculator from "./components/calculator";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  
  const [currentTime, setCurrentTime] = useState<string>("");
  useEffect(() => {
    const getCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0"); // Ensures two digits
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };
    const interval = setInterval(getCurrentTime, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-[100%] max-w-[450px] min-h-[100vh] flex flex-col items-center justify-between ${darkMode ? 'bg-[#212327]' : 'bg-[#FFFFFF]'}`}>
      <div className="w-[100%] h-[47px] pl-[27px] pr-[27px] flex items-center justify-between">
        <Time className={`${darkMode ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}>{currentTime}</Time>
        <div className="flex items-center gap-[8px]">
          <img src={darkMode ? lightCellular : darkCellular} alt="Cellular" className="h-[12px]"/>
          <img src={darkMode ? lightWifi : darkWifi} alt="wifi" className="h-[12px]"/>
          <img src={darkMode ? lightBattery : darkBattery} alt="Battery" className="h-[13px]"/>
        </div>
      </div>
      <Calculator darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default App