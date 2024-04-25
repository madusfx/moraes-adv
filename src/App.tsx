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
  TextName,
  TextBiography,
  ContactCard,
  Input,
  Label,
  TextArea,
  Button,
  Footer,
  Icon,
  FooterRights,
  ContactDiv,
} from './styles';
import Logo from './images/logo.svg';
import Background from './images/image-background.jpg';
import ImageAdrian from './images/image-adrian.jpg';
import { useState } from 'react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

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

  function goToLinkedin() {
    const url = 'https://www.linkedin.com/in/adrianmajinskimoraes/';
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
      <Section id="sobre-nos">
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
      <Section id="areas-de-atuacao">
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
      <Section id="equipe">
        <Title>EQUIPE</Title>
        <div style={{ display: 'flex', marginRight: 'auto' }}>
          <img src={ImageAdrian} alt="" />
          <div>
            <TextName>
              Adrian Vinicius Majinski de Moraes - Advogado OAB/PR 123.327{' '}
            </TextName>
            <TextBiography>
              Advogado, graduado em direito pela
              <br /> Universidade Estadual de Ponta Grossa,
              <br /> com anos de experiência em advocacia
              <br /> cível e empresarial.
            </TextBiography>
          </div>
        </div>
        <Line />
      </Section>
      <Section id="contato">
        <Title>ENTRE EM CONTATO</Title>
        <ContactCard>
          <Label>Nome</Label>
          <Input placeholder="Digite seu nome" type="text" />
          <Label>Telefone</Label>
          <Input placeholder="Digite seu telefone" type="number" />
          <Label>E-mail</Label>
          <Input placeholder="Digite seu e-mail" type="email" />
          <Label>Mensagem</Label>
          <TextArea placeholder="Digite sua mensagem" />
          <Button>
            <p>ENVIAR</p>
          </Button>
        </ContactCard>
      </Section>
      <Footer>
        <ContactDiv>
          <h1>MENU</h1>
          <a href="#sobre-nos">Sobre nós</a>
          <a href="#areas-de-atuacao">Áreas de atuação</a>
          <a href="#equipe">Equipe</a>
          <a href="#contato">Contato</a>
        </ContactDiv>
        <ContactDiv>
          <h1>CONTATO</h1>
          <a href="tel:4232237728">
            <Icon icon={faPhone} />
            <p>(42) 3223-7728</p>
          </a>
          <a href="mailto:adrianmanjinski@gmail.com">
            <Icon icon={faEnvelope} />
            <p>adrianmanjinski@gmail.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/adrianmajinskimoraes/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={faLinkedin} onClick={goToLinkedin} />
            <p>/adrianmajinskimoraes</p>
          </a>
        </ContactDiv>
        <div>
          <h1>ENDEREÇO</h1>
          <p>Ponta Grossa - PR</p>
        </div>
      </Footer>
      <FooterRights>
        <p>© Moraes Advogados Associados 2024. Todos os direitos reservados</p>
        <p>Desenvolvido por Maria Eduarda Freitas</p>
      </FooterRights>
    </div>
  );
}

export default App;
