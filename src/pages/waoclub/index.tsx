import React from "react";
import Head from "next/head";

const WaoClubPage = () => {
  return (
    <>
      <Head>
        <title>WaoSim | WaoClub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconIcon.svg" />
      </Head>
      <main>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
            width: "100%",
            backgroundColor: "#FFF0ED",
          }}
        >
          <h1> WaoClub</h1>
        </div>
      </main>
    </>
  );
};

export default WaoClubPage;
