import { FooterWrapper, FooterText } from "../Styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        © {new Date().getFullYear()} Movie Explorer · Built with React & TMDb
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
