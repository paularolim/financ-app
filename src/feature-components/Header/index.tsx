import React, { useEffect, useState } from 'react';

import { DrawerActions, useNavigation } from '@react-navigation/native';

import { Icon } from '../../components/Icon';
import { Text } from '../../components/Text';
import { useDashboardState } from '../../core/application/states/dashboard';
import { months } from './months';
import { Container, MonthContainer, Title } from './styles';
import { HeaderProps } from './types';

// TODO: hidde cards when scroll screen (only show "Dashboard")
export const Header = ({ children }: HeaderProps): JSX.Element => {
  const navigation = useNavigation();

  const [hideValues, setHideValues] = useDashboardState(state => [
    state.hideValues,
    state.setHideValues,
  ]);
  const [selectedMonthLabel, setSelectedMonthLabel] = useState('');
  const [selectedMonthNumber, setSelectedMonthNumber] = useState(1);
  const [selectedYearNumber, setSelectedYearNumber] = useState(2022);

  const [setFilterFirstDate, setFilterLastDate] = useDashboardState(state => [
    state.setFilterFirstDate,
    state.setFilterLastDate,
  ]);

  const nextMonth = () => {
    let _nextMonth = selectedMonthNumber + 1;
    let _nextYear = selectedYearNumber;

    if (_nextMonth === 12) {
      // switch to next year
      _nextMonth = 0;
      _nextYear = selectedYearNumber + 1;
      setSelectedYearNumber(_nextYear);
    }
    setSelectedMonthLabel(`${months[_nextMonth]}/${_nextYear}`);
    setSelectedMonthNumber(_nextMonth);
  };

  const prevMonth = () => {
    let _prevMonth = selectedMonthNumber - 1;
    let _prevYear = selectedYearNumber;

    if (_prevMonth === -1) {
      // back to last year
      _prevMonth = 11;
      _prevYear = selectedYearNumber - 1;
      setSelectedYearNumber(_prevYear);
    }
    setSelectedMonthLabel(`${months[_prevMonth]}/${_prevYear}`);
    setSelectedMonthNumber(_prevMonth);
  };

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    setSelectedMonthLabel(`${months[currentMonth]}/${currentYear}`);
    setSelectedMonthNumber(currentMonth);
    setSelectedYearNumber(currentYear);
  }, []);

  useEffect(() => {
    const firstDayOfCurrentMonth = new Date(
      selectedYearNumber,
      selectedMonthNumber,
      1,
    );
    const lastDayOfCurrentMonth = new Date(
      selectedYearNumber,
      selectedMonthNumber + 1,
      0,
    );
    setFilterFirstDate(firstDayOfCurrentMonth.getTime().toString());
    setFilterLastDate(lastDayOfCurrentMonth.getTime().toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYearNumber, selectedMonthNumber]);

  return (
    <Container>
      <Title>
        <Icon
          name="menu-outline"
          onPress={(): void => navigation.dispatch(DrawerActions.openDrawer())}
        />

        <MonthContainer>
          <Icon
            name="chevron-back-outline"
            marginRight={25}
            size="small"
            onPress={prevMonth}
          />
          <Text fontSize="medium" color="white" bold>
            {selectedMonthLabel}
          </Text>
          <Icon
            name="chevron-forward-outline"
            marginLeft={25}
            size="small"
            onPress={nextMonth}
          />
        </MonthContainer>

        {hideValues ? (
          <Icon name="eye-outline" size="small" onPress={setHideValues} />
        ) : (
          <Icon name="eye-off-outline" size="small" onPress={setHideValues} />
        )}
      </Title>
      {children}
    </Container>
  );
};
