import React, { useEffect } from 'react';



const Collaborate = () => {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://togetherjs.com/togetherjs-min.js";
        script.async = false;
      
        document.body.appendChild(script);

        const span = document.createElement('span');
        span.innerHTML = '<button onclick="TogetherJS(this); return false;">Start TogetherJS</button>'

        document.body.appendChild(span);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <div>
          
        </div>
    )
}

export default Collaborate;