import React, { useEffect } from 'react';
import getCurrentProfile from '../../../actions/profile'





const Collaborate = () => {
    useEffect(() => {
    
      
        const script1 = document.createElement('script');
        script1.innerHTML = `
        var TogetherJSConfig_siteName = "CaseByCase";
        var TogetherJSConfig_toolName = "Collaborate";
        `
        document.body.appendChild(script1);
        


        const script2 = document.createElement('script');
        script2.src = "https://togetherjs.com/togetherjs-min.js";
        script2.async = false;
      
        document.body.appendChild(script2);

        const span = document.createElement('span');
        span.innerHTML = '<a href="!#" class="nav-item nav-link" onclick="TogetherJS(this); return false;">Collaborate</a>'

        document.getElementById("collab").appendChild(span);

        return () => {
          document.body.removeChild(script2);
        }
      }, []);

    return (
        <span></span>
    )
}

export default Collaborate;