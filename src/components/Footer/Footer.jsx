import logo from "../../logo/logo1.png";
import { FooterLogo, FooterStyle, FooterText } from "./Footer.styled";

export const Footer = () => {
    return (
        <FooterStyle>
            <FooterLogo src={logo} alt="logo" />
            <FooterText>Created by <a>Balancyй Team</a> </FooterText>
        </FooterStyle>

    )
}