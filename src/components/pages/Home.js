import React from "react";
import "../../App.css";
import Form from "../Form";
import News from "../news";
import Covid from "../Covid";
import Beds from "../beds";
import Guidelines from "../Guidelines";

function Home() {
  return (
    <>
      <Covid />
      <Beds />
      <News />
      <Guidelines />
      <Form />
    </>
  );
}

export default Home;
