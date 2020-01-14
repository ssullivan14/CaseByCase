import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../../actions/profile';





const Collaborate = ({
  getCurrentProfile,
	profile: { profile, loading }
}) => {
    useEffect(() => {



        console.log("Profile Test: " + getCurrentProfile.profile);
        console.log("Profile Test: " + getCurrentProfile.user);
        console.log("Profile Test: " + profile);
        console.log("Profile Test: " + profile);
        const script1 = document.createElement('script');
        script1.innerHTML = `
        var avatarUrl = "http://www.gravatar.com/avatar/46e1f7fabd42627db9132dfd84700b2b?s=200&r=pg&d=mm";

        TogetherJSConfig_getUserName = function () {return 'Arthidon';};
        TogetherJSConfig_getUserAvatar = function () {return avatarUrl;};
        TogetherJSConfig_getUserColor = function () {return '#1d3b68';};

        var TogetherJSConfig_suppressJoinConfirmation = true;
        var TogetherJSConfig_findRoom = "CaseByCase";
        var TogetherJSConfig_youtube = true;
        
        var TogetherJSConfig_siteName = "CaseByCase";
        var TogetherJSConfig_toolName = "Collaborate";

        TogetherJS.refreshUserData();
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
      }, [getCurrentProfile]);

    return (
        <span></span>
    )
}

Collaborate.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
	profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })
	(Collaborate);
