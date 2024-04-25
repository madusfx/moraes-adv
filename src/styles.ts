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
