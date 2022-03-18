import styled from 'styled-components/native';

interface GraphicBarProps {
  width: number;
}

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const GraphicBar = styled.View`
  width: 100%;
  height: 5px;
  flex-direction: row;
  border-radius: 20px;
  overflow: hidden;
`;

export const IncomeBar = styled.View<GraphicBarProps>`
  width: ${({ width }) => width}%;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.success};
`;

export const OutcomeBar = styled.View<GraphicBarProps>`
  width: ${({ width }) => width}%;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.danger};
`;

export const Info = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
