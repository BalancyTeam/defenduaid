import logo from "../../logo/logo.png";
import { HeaderStyle, Logo } from "./header.styled";
import { LanguageSelect } from "./LanguageSelect/LanguageSelect";



export const Header = () => {
    return (
        <HeaderStyle>
            <Logo src={logo} alt="logo" />
            <LanguageSelect /> 
        </HeaderStyle>
    )
}