"use client";
import Script from "next/script";
import { useEffect, useRef } from "react";
export default function GoogleAuth() {
  const divRef = useRef(null);

  useEffect(() => {
    console.log("Component rendered");
    
  });
  const renderGoogleAuth = () => {
    return (
      <div ref={divRef}>
        <div
          id="g_id_onload"
          data-client_id="256526142796-s4pl16jv8cqqont1415a39fnt9f0o114.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="popup"
          data-login_uri="http://localhost:3000/signup"
          data-auto_prompt="false"
        ></div>

        <div
          className="g_id_signin"
          data-type="standard"
          data-shape="rectangular"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left"
        ></div>
      </div>
    ) 
  }
  return (
    <>
      
      {renderGoogleAuth()}
      <Script src="https://accounts.google.com/gsi/client" />
    </>
  );
}
