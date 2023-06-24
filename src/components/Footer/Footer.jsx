import logo from "../../assets/icons/logo.svg";
import { FooterLogo, FooterStyle, FooterText } from "./Footer.styled";

export const Footer = () => {
    return (
        <FooterStyle>
            <FooterLogo src={logo} alt="logo" />
            <FooterText>Created by <a href="https://www.linkedin.com/company/balancyua-team/" target="_blank" rel="noopener noreferrer">Balancyй Team</a></FooterText>
        </FooterStyle>

    )
}