import React, { useEffect } from 'react';



const Collaborate = () => {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://togetherjs.com/togetherjs-min.js";
        script.async = false;
      
        document.body.appendChild(script);

        const span = document.createElement('span');
        span.innerHTML = '<a href="!#" class="nav-item nav-link" onclick="TogetherJS(this); return false;">Collaborate</a>'

        document.getElementById("collab").appendChild(span);

        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <span></span>
    )
}

export default Collaborate;