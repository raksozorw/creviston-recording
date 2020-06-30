import React, {useRef, useState, useLayoutEffect} from 'react'

export default function ScrollFade(props) {
    const [show, setShow] = useState("hidden")
   
    const ourRef = useRef(null);

    

    useLayoutEffect(() => {
        const topPosition = () => ourRef.current.getBoundingClientRect().top;
        
        const div1Pos = topPosition(ourRef.current)
        

      const onScroll = () => {
          const scrollPosition = window.scrollY + window.innerHeight;
    

           // would be nice if I could ahold if the position from the very top of the page instead of the window, it reset with refresh
          if (div1Pos < scrollPosition) {
            
              
              setShow("show")
             
          } else if (div1Pos > scrollPosition) {
              setShow("hidden")
              
          }
      };
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

 
    



    return (
        <div ref={ourRef}>
            <div className={show}>
             {props.content}
            </div>
        </div>
    );
};

