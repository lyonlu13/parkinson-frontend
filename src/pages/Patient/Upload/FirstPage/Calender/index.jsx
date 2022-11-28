
import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import '../InputBar.css';

export var date;
export var time;
export default function CalendarDemo() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;

    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    

    let minDate = new Date();
    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);

    let maxDate = new Date();
    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);
    
    return (
        <div className='calendar-layout'>
            <div className="card calendar-demo">
                <div className="p-fluid">
                    <div className='space'>日期</div>
                    <div className="calender">
                        <Calendar id="basic" dateFormat="yy/mm/dd" value={date} onChange={(e) => setDate(e.value)} placeholder="請輸入日期"/>
                    </div>
                    <div className='space'>時間</div>
                    <div className="time">
                        <Calendar id="time12" value={time} onChange={(e) => setTime(e.value)} timeOnly hourFormat="12" placeholder='請輸入時間'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

