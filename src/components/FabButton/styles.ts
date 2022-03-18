import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: flex-end;
  margin: 20px;
  z-index: 1;
`;

export const Menu = styled.View`
  margin-bottom: 10px;
`;

export const MenuItem = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 10px 20px;
  margin: 5px 0px;
  flex-direction: row;
`;
