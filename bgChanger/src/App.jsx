import {useState} from "react"

function App() {
    const [color, setColor] = useState("#FFFF00")

    return (<> < div className = "w-full h-screen duration-200"
    style={{backgroundColor: color}}
    > 
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
      <button 
      onClick={() => setColor("#000033")}
      className="px-4 outline-none py-1 rounded-full text-white"
      style={{backgroundColor: "#000033 "}}>Blue</button>
      <button 
      onClick={() => setColor("#FF0033")}
      className="px-4 outline-none py-1 rounded-full text-white"
      style={{backgroundColor: "#FF0033 "}}>Pink</button>
      <button 
      onClick={() => setColor("#263238")}
      className="px-4 outline-none py-1 rounded-full text-white"
      style={{backgroundColor: "#263238"}}>Grey</button>
      <button 
      onClick={() => setColor("#FF5722")}
      className="px-4 outline-none py-1 rounded-full text-white"
      style={{backgroundColor: "#FF5722 "}}>Orange</button>
      <button
      onClick={() => setColor("#CC6699")}
      className="px-4 outline-none py-1 rounded-full text-white"
      style={{backgroundColor: "#CC6699 "}}>Purple</button>
     </div>
    </div>
    </div>
</>)
}

export default App
