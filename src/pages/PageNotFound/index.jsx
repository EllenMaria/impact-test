import React from "react";
import { GoBack } from "../../components";
import { Heading } from "../../components/Heading/styles";
import { theme } from "../../styles/themes";
import { GlobalStyles } from "../../styles";

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
      <GlobalStyles backgroundColor={`${theme.colors.lightColor}`} />
    </>
  );
};

export default PageNotFound;
