import P from "prop-types";
import * as Styled from "./Heading.styles";

const Heading = ({ children, light = false }) => {
  return <Styled.Title light={light}>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  light: P.bool.isRequired,
};

export default Heading;
