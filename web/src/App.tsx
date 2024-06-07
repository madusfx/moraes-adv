import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Section,
  BackgroundImage,
  Contact,
  ContactText,
  Header,
  Line,
  MenuDiv,
  Text,
  Title,
  Card,
  ContactCard,
  Label,
  TextArea,
  Button,
  Footer,
  Icon,
  FooterRights,
  ContactDiv,
  List,
  ListItem,
  Menu,
  TextMenu,
  HamburguerMenu,
  WhatsappIcon,
  CardsContainer,
  HeaderDiv,
} from './styles';
import Logo from './images/logo.svg';
import Background from './images/image-background.jpg';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { schema } from './utils/schema';
import { InputComponent } from './components/Input';
import { useState } from 'react';
import { Modal } from './components/Modal';
import api from './utils/api';

export type FormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormValues) => {
    const payload = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
    };
    api
      .post('/send', payload)
      .then(function (response) {
        setModalOpen(true);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        alert(
          'Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.',
        );
      });
  };

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
    <>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
      <div className="App">
        <div
          style={{
            display: 'flex',
            position: 'fixed',
            top: '0',
            width: '100%',
            zIndex: '1',
          }}
        >
          <Header>
            <a href="#header">
              <img src={Logo} alt="Logo da advocacia" />
            </a>
            <HeaderDiv>
              <MenuDiv>
                <TextMenu>MENU</TextMenu>
                <HamburguerMenu open={menuOpen} onClick={handleMenuOpen}>
                  <div />
                  <div />
                  <div />
                </HamburguerMenu>
              </MenuDiv>
              <Contact onClick={handleClick}>
                <WhatsappIcon icon={faWhatsapp} />
                <ContactText>
                  CLIQUE PARA
                  <br /> ENTRAR EM CONTATO
                  <br /> VIA WHATSAPP
                </ContactText>
              </Contact>
            </HeaderDiv>
          </Header>
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
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <Line />
        </Section>
        <Section id="areas-de-atuacao">
          <Title>ÁREAS DE ATUAÇÃO</Title>
          <CardsContainer>
            <Card>
              <p>CIVIL</p>
            </Card>
            <Card>
              <p>EMPRESARIAL</p>
            </Card>
            <Card>
              <p>TRABALHISTA</p>
            </Card>
            <Card>
              <p>BANCÁRIO</p>
            </Card>
            <Card>
              <p>IMOBILIÁRIO</p>
            </Card>
            <Card>
              <p>RECUPERAÇÃO DE CRÉDITO</p>
            </Card>
          </CardsContainer>
          <Line />
        </Section>
        <Section id="contato">
          <Title>ENTRE EM CONTATO</Title>
          <FormProvider {...methods}>
            <ContactCard onSubmit={handleSubmit(onSubmit)}>
              <Label>Nome</Label>
              <InputComponent
                placeholder="Digite seu nome"
                name="name"
                type="text"
                register={register}
                errorMessage={errors.name?.message}
              />
              <Label>Telefone</Label>
              <InputComponent
                placeholder="Digite seu telefone"
                name="phone"
                type="number"
                register={register}
                errorMessage={errors.phone?.message}
              />
              <Label>E-mail</Label>
              <InputComponent
                placeholder="Digite seu e-mail"
                name="email"
                type="text"
                register={register}
                errorMessage={errors.email?.message}
              />
              <Label>Mensagem</Label>
              <TextArea
                placeholder="Digite sua mensagem"
                {...register('message')}
              />
              {errors.message && (
                <p style={{ color: 'white' }}>{errors.message.message}</p>
              )}
              <Button type="submit">
                <p>ENVIAR</p>
              </Button>
            </ContactCard>
          </FormProvider>
        </Section>
        <Footer>
          <ContactDiv>
            <h1>MENU</h1>
            <a href="#sobre-nos">Sobre nós</a>
            <a href="#areas-de-atuacao">Áreas de atuação</a>
            <a href="#contato">Contato</a>
          </ContactDiv>
          <ContactDiv>
            <h1>CONTATO</h1>
            <a href="tel:4232237728">
              <Icon icon={faPhone} />
              <p>(42) 3223-7728</p>
            </a>
            <a href="mailto:moraesadvpg@gmail.com">
              <Icon icon={faEnvelope} />
              <p>moraesadvpg@gmail.com</p>
            </a>
          </ContactDiv>
        </Footer>
        <FooterRights>
          <p>
            © Moraes Advogados Associados 2024. Todos os direitos reservados
          </p>
          <p>
            Desenvolvido por{'\n'}
            <a
              href="https://api.whatsapp.com/send?phone=5543998065320&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20site."
              style={{ color: 'white' }}
              target="blank"
            >
              <span>Maria Eduarda Freitas</span>
            </a>
          </p>
        </FooterRights>
      </div>
    </>
  );
}

export default App;
