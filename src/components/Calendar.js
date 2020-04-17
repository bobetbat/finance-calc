import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import DayTransactions from './DayTransactions';

const Frame = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
  background-color: #2e3035;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f6fa;
`;

const Button = styled.div`
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  width: 13.33%;
  margin: 0.3rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: solid 0.1rem #61dafb;
  color: #61dafb;
  border-radius: 0.5rem;


  ${props =>
    (props.isToday && props.isMonth) && 
    css`
      border: 1px solid #fff;
    `}

  ${props =>
    props.isSelected &&
    css`
      background-color: #61dafb;
      color: #2e3035;
    `}
`;

const WeekDay = styled.div`
  width: 13.33%;
  margin: 0.4rem;
  height: 3rem;
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  color: #61dafb;
`;

export function Calendar() {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear ? DAYS_LEAP : DAYS;
  return (
    <Frame>
      <Header>
        <Button onClick={() => setDate(new Date(year, month - 1, day))}>Prev</Button>
        <div>
          {MONTHS[month]} {year}
        </div>
        <Button onClick={() => setDate(new Date(year, month + 1, day))}>Next</Button>
      </Header>
      <Body>
        {DAYS_OF_THE_WEEK.map(d => (
          <WeekDay key={d}>
            <strong>{d}</strong>
          </WeekDay>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            return (
              <Day
                key={index}
                isToday={d === today.getDate()}
                isMonth={month === today.getMonth()}
                isSelected={d === day}
                onClick={() => setDate(new Date(year, month, d))}//TODO set date to store 
              >
                {d > 0 ? d : ''}
                <DayTransactions />
              </Day>
            );
          })}
      </Body>
    </Frame>
  );
}
