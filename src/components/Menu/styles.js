import styled, { css } from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  background: none;
  border: 0;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;

  span {
    color: #0387b3;
    font-weight: 600;
  }
`;

export const MenuList = styled.div`
  position: absolute;
  left: calc(50% - 80px);
  width: 160px;
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  padding: 15px 5px;
  z-index: 1;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &&::after {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.8);
  }
`;

export const MenuItem = styled.div`
  a {
    color: #c9c9c9 !important;
    transition: color 0.3s;
    padding: 10px 15px;

    :hover {
      color: rgba(255, 255, 255, 1.8) !important;
    }
  }

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }
`;

export const Scroll = styled.div`
  max-height: 350px;
  padding: 5px 10px;
  text-align: center;
`;
