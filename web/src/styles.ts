import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Header = styled.div`
  height: 60px;
  width: 90%;
  background-color: #320000;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    margin-left: 64px;
  }
`;

export const Contact = styled.div`
  width: 10%;
  background-color: #5d2417;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ContactText = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 16px;
`;

export const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextMenu = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 24px;
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
  transition: all 0.3s linear;
  margin-left: 69%;
  top: 60px;
  right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5d2417;
  width: 20%;
  padding: 12px;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  margin-top: 6px;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  list-style-type: none;
`;

export const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  img {
    margin-top: 60px;
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

export const CardsDiv = styled.div`
  display: flex;
  flex-direction: row;
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
`;

export const ContactCard = styled.div`
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
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #fff;
  width: 24px;
  height: 24px;
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
`;