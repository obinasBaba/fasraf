import React from "react";
import s from "./service.module.scss";
import { Stack, Typography } from "@mui/material";
import SVG from "react-inlinesvg";
import HeaderIcon from "./service-header-icon.svg";
import Script from "next/script";
import { Partytown } from "@builder.io/partytown/react";
import Head from "next/head";

const services = [{
  icon: "", title: "Paid Business", body: `Lorem ipsum dolor sit amet consectetur.
    Odio volutpat urna aliquet bibendum. Aliquet potenti quis aliquam molestie.
    Sit placerat scelerisque ac
    cursus tincidunt amet consectetur a orci. Ut nisl id consectetur tincidunt.`
}];

const Service = () => {
  return (<>

     {/*

      <Partytown
        forward={["bodymovin.loadAnimation"]}
      />

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"
        strategy="worker"
        // type={"text/partytown"}
        onLoad={(arg) => {
          console.log("sample onload: ----------------------- ");
        }}

        onError={(e: Error) => {
          console.error("Script failed to load", e);
        }}

        onReady={() => {
          console.log("sample on ready: ----------------------- ", (window as any)?.bodymovin?.loadAnimation);


          const animation = (window as any).bodymovin.loadAnimation({
            container: document.getElementById("lottie"), // Required
            path: "data.json", // Required
            renderer: "svg/canvas/html", // Required
            loop: true, // Optional
            autoplay: true, // Optional
            name: "Hello World" // Name for future reference. Optional.
          });

          console.log("animation :", animation);

        }}
      />*/}

      <div className={s.container}>
        <div className={s.wrapper}>
          <header>
            <div className={s.icon}>
              <SVG src={HeaderIcon.src} cacheRequests />
            </div>

            <Stack>
              <Typography variant="h6" className={s.sub}>
                SERVICES
              </Typography>
              <Typography variant="h3" className={s.title}>
                WHAT WE OFFER
              </Typography>
            </Stack>
          </header>

          <ul>
            {new Array(6).fill(services[0]).map((ser, idx) => (<li className={s.card} key={idx}>
                <div className={s.icon}>
                  <Typography>LOTI</Typography>
                </div>
                <Typography variant="h5">{ser.title}</Typography>
                <Typography variant="body1">{ser.body}</Typography>
              </li>))}
          </ul>
        </div>
      </div>
    </>

  );
};

export default Service;
