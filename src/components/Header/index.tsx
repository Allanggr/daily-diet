import { Container, Logo, UserProfile } from "./styles";

export function Header() {
    return (
        <Container>
            <Logo source={require("@assets/logo.png")} />
            <UserProfile source={require("@assets/user-profile.png")} />
        </Container>
    );
}