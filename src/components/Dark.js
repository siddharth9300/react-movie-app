import React, { useState , useEffect} from "react";
import "../App.css";

function Dark() {


    const [theme, setTheme] = useState(null);

    useEffect(() => {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark');
      }
      else {
        setTheme('light');
      }
    }, [])
  
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        document.getElementById("dark").classList.add("dark_icon");

      } else {
        document.documentElement.classList.remove("dark");
        document.getElementById("dark").classList.add("light_icon");
      }
    }, [theme]);
  
    const handleThemeSwitch = () => {
      if (theme === "dark") {
        setTheme("light");
        // document.getElementById("dark").classList.toggle("dark_icon");
        document.getElementById("dark").classList.remove("dark_icon");
        document.getElementById("dark").classList.add("light_icon");

      }else{
        setTheme("dark");
        document.getElementById("dark").classList.remove("light_icon");
        document.getElementById("dark").classList.add("dark_icon");
      }
      // setTheme(theme === "dark" ? "light" : "dark");
    };
  
  

    // const dark=()=> {
    //   var element = document.body;
    //   element.classList.toggle("dark-mode");
    //   document.getElementById("dark").classList.toggle("dark_icon");


    //   const darkicon=()=> {
    //     document.getElementById("dark").classList.remove("light_icon");
    //     document.getElementById("dark").classList.add("dark_icon");
      
    //   }
      
    //   const color_change=()=>{
    //     let x = document.getElementById("color").value
    //     document.getElementsByClassName("container").style.background = x
      
    //   }
  
  return (
    <>
    {/* <div className="flex flex-col items-left">
    <button id="dark"></button>
    </div> */}

    <div className="flex flex-end items-left">
      <button id="dark" className="cursor-pointer transition-all max-md:mr-6  hover:rounded-md  p-2  h-12 w-12 md:my-2 md:mx-10 rounded-xl" onClick={handleThemeSwitch}>
        
      </button>
    </div>
  </>
  )
}

export default Dark;