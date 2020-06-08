import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";

const LogoutScreen = () => (
  <Background>
    <Logo />
    <Header>Leaving?</Header>
    <Paragraph>
      Hope to see you back next time!
    </Paragraph>
    <Button mode="outlined" onPress={() => logoutUser()}>
      Logout
    </Button>
  </Background>
);

export default memo(LogoutScreen);
