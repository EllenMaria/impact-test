import React from "react";
import { GoBack } from "../../components";
import { Heading } from "../../components/Heading/styles";

const PageNotFound = () => {
  return (
    <>
      <Heading level={1} align="center" fontSize="header1">
        404 :(
      </Heading>
      <Heading level={2} align="center" fontSize="header5">
        This is not the web page you are looking for.
      </Heading>
      <GoBack />
    </>
  );
};

export default PageNotFound;
