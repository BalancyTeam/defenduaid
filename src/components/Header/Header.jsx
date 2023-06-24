import logo from "../../assets/icons/logo.svg";
import { HeaderStyle, Logo } from "./header.styled";




export const Header = () => {
    return (
        <HeaderStyle>
            <Logo src={logo} alt="logo" />
        </HeaderStyle>
    )
}