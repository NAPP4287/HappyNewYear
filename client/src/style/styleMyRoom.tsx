import styled, { keyframes } from 'styled-components';

export const MyRoomWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MyLetterWrap = styled.div`
  width: 1020px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 500px;
    height: 600px;
    background-color: #fff;
  }
  > div:nth-child(1) {
    border-radius: 200px 200px 0 0;
  }
  > div:nth-child(2) {
    margin-left: 20px;
    border-radius: 20px;
  }
`;
