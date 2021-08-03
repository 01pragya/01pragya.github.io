function onSignIn(googleUser) {
      // Useful data for your client-side scripts:
      var profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // Don't send this directly to your server!
      console.log('Full Name: ' + profile.getName());
      console.log('Given Name: ' + profile.getGivenName());
      console.log('Family Name: ' + profile.getFamilyName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail());

      // The ID token you need to pass to your backend:
      var id_token = googleUser.getAuthResponse().id_token;
      console.log("ID Token: " + id_token);
      document.getElementById("owner").innerHTML =  profile.getGivenName() ;
      document.getElementById("disply-name").innerHTML = profile.getName();
      document.getElementById("signout").innerHTML = "<a href=\"#\" onclick=\"signOut();\">Sign out</a>";
      document.getElementById("email").innerHTML = "Signed In as "+ profile.getEmail();
    }

function signin() {
      
      try {
           const data = await AppleID.auth.signIn();
            console.log("success");
      } catch ( error ) {
           //handle error.
            console.log("failure");
      }
}

