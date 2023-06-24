import logo from "../../logo/logo1.png";
import { FooterLogo, FooterStyle, FooterText, Link } from "./Footer.styled";

export const Footer = () => {
    return (
        <FooterStyle>
            <FooterLogo>
                <img src={logo} alt="logo" />
            </FooterLogo>
            <FooterText>Created by <Link href="">Balancyй Team</Link> </FooterText>
        </FooterStyle>

    )
}