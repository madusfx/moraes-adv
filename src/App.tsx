import {
  Section,
  BackgroundImage,
  Contact,
  ContactText,
  HamburguerMenu,
  Header,
  Line,
  List,
  ListItem,
  Menu,
  MenuDiv,
  Text,
  TextMenu,
  Title,
  Card,
  CardsDiv,
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
      <Section>
        <Title>SOBRE NÓS</Title>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Line />
      </Section>
      <Section>
        <Title>ÁREAS DE ATUAÇÃO</Title>
        <CardsDiv>
          <Card>
            <p>CIVIL</p>
          </Card>
          <Card>
            <p>EMPRESARIAL</p>
          </Card>
          <Card>
            <p>TRABALHISTA</p>
          </Card>
        </CardsDiv>
        <CardsDiv>
          <Card>
            <p>BANCÁRIO</p>
          </Card>
          <Card>
            <p>IMOBILIÁRIO</p>
          </Card>
          <Card>
            <p>RECUPERAÇÃO DE CRÉDITO</p>
          </Card>
        </CardsDiv>
        <Line />
      </Section>
    </div>
  );
}

export default App;
