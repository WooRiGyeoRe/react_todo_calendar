import React, { useState } from 'react';

const Calendar = () => {
  // useState 기본 구조 =>  const [현재 상태값, 상태 업데이트 함수] = useState(상태 초기값);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="calender">
      <div className="header">Header</div>
      <div className="days">Days</div>
      <div className="body">Cells</div>
    </div>
  );
};

export default Calendar;
