import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Header = styled.div`
  height: 90px;
  width: 100%;
  background-color: #320000;
  padding-left: 16px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
  img {
    margin-left: 64px;
    height: 100%;
    @media screen and (max-width: 560px) {
      margin-left: 0px;
      height: auto;
    }
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 100%;
`;

export const Contact = styled.div`
  height: 100%;
  background-color: #5d2417;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const ContactText = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  line-height: 1.2;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const WhatsappIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 24px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
`;

export const TextMenu = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 24px;
  @media (max-width: 460px) {
    display: none;
  }
`;

export const HamburguerMenu = styled.div<{ open?: boolean }>`
  width: 2rem;
  height: 2rem;
  margin-left: 12px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #fff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${props =>
        props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${props => (props.open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${props => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 90px;
  right: 0;
  background-color: #5d2417;
  width: 20%;
  padding: 12px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 760px) {
    position: fixed;
    top: 90px;
    left: 0;
    right: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    flex-direction: column;
    justify-content: center;
    z-index: 10;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  text-decoration: none;
`;

export const ListItem = styled.li`
  cursor: pointer;
  margin: 12px 0;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  list-style-type: none;

  @media (max-width: 760px) {
    margin: 12px 0;
  }
`;

export const BackgroundImage = styled.div`
  position: relative;
  img {
    margin-top: 90px;
    width: 100%;
    height: auto;
    display: block;
  }
  p {
    position: absolute;
    text-align: center;
    color: #320000;
    font-weight: 900;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 560px) {
      font-size: 12px;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 64px;
  margin-right: 64px;
  img {
    margin-right: auto;
  }
  @media (max-width: 460px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const Title = styled.p`
  text-align: right;
  margin-right: auto;
  color: #320000;
  font-weight: 700;
  font-size: 24px;
`;

export const Text = styled.p``;

export const TextName = styled.p`
  margin-left: 24px;
  color: #320000;
  font-weight: 700;
  font-size: 16px;
`;

export const TextBiography = styled.p`
  color: #320000;
  margin-left: 24px;
  font-size: 16px;
  font-weight: 400;
`;

export const Line = styled.div`
  margin-top: 36px;
  width: 30%;
  height: 2px;
  background-color: #320000;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 24px;

  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(190px, 1fr));
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(190px, 1fr));
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px;
  width: 190px;
  height: 90px;
  background-color: #320000;
  border-radius: 8px;
  &:hover {
    transition: all 0.3s linear;
    transform: scale(1.1);
  }
  p {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }
  @media screen and (max-width: 760px) {
    margin: 8px;
  }
`;

export const ContactCard = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  background-color: #320000;
  padding: 32px;
  border-radius: 8px;
`;

export const Label = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  margin-right: auto;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  padding: 12px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  padding: 12px;
  height: 80px;
  resize: none;
`;

export const Button = styled.button`
  width: 40%;
  margin-top: 24px;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  p {
    color: #320000;
    font-weight: 700;
    font-size: 18px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 44px;
  padding-bottom: 12px;
  background-color: #320000;
  h1 {
    color: #fff;
    font-weight: 700;
    font-size: 16px;
  }
  a {
    margin-top: 6px;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
  }
  p {
    color: #fff;
    font-weight: 400;
    font-size: 16px;
  }
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #fff;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const FooterRights = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #5d2417;
  p {
    margin-left: 24px;
    margin-right: 24px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
  }
  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
  }
  p {
    margin-left: 12px;
  }
  @media screen and (max-width: 720px) {
    margin-left: 24px;
    h1 {
      margin-top: 12px;
    }
  }
`;
