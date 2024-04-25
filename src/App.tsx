import {
  BackgroundImage,
  Contact,
  ContactText,
  HamburguerMenu,
  Header,
  List,
  ListItem,
  Menu,
  MenuDiv,
  TextMenu,
} from './styles';
import Logo from './images/logo.svg';
import Background from './images/image-background.jpg';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  function handleClick() {
    const url =
      'https://api.whatsapp.com/send?phone=554232237728&text=Ol%C3%A1,%20localizei%20o%20contato%20atrav%C3%A9s%20do%20site.%20Podemos%20conversar%3F';
    window.open(url, '_blank');
  }

  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <Header>
          <img src={Logo} alt="Logo da advocacia" />
          <MenuDiv>
            <TextMenu>MENU</TextMenu>
            <HamburguerMenu open={menuOpen} onClick={handleMenuOpen}>
              <div />
              <div />
              <div />
            </HamburguerMenu>
          </MenuDiv>
        </Header>
        <Contact onClick={handleClick}>
          <ContactText>
            ENTRE EM
            <br /> CONTATO
          </ContactText>
        </Contact>
      </div>
      {menuOpen && (
        <Menu>
          <List>
            <ListItem>SOBRE NÓS</ListItem>
            <ListItem>ÁREAS DE ATUAÇÃO</ListItem>
            <ListItem>EQUIPE</ListItem>
            <ListItem>CONTATO</ListItem>
          </List>
        </Menu>
      )}
      <BackgroundImage>
        <img src={Background} alt="" />
        <p>
          Uma nova marca.
          <br /> Um novo escritório.
          <br /> Uma nova advocacia.
        </p>
      </BackgroundImage>
    </div>
  );
}

export default App;
