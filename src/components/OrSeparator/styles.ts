import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
`;

export const Separator = styled.View`
  width: 60px;
  border: 2px solid ${({ theme }) => theme.colors.shape};
  border-radius: 2px;
  margin: 0px 16px;
`;
