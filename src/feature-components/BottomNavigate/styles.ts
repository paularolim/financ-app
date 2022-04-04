import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
`;
