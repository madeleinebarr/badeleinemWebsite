import React from 'react';
import Navigation from './Navigation';

function Lesson(date, lesson) {
    this.date = date;
    this.lesson = lesson;
}

const lessonArray = [
    new Lesson("April 26, 2021", "Using objects as accumulators in reduce functions for JavaScript arrays can be really powerful when you're working with multiple variables (i.e. computational statistics)."),
    new Lesson("April 25, 2021", "To properly wash a bike, you should spray a degreaser like WD-40  on the chain."),
    new Lesson("April 24, 2021", "Asters and goldenrod grow next to each other because their complementary colors (purple and yellow) make them appear more beautiful and eye-catching to bees."),
    new Lesson("April 23, 2021", "Drawing out the component hierarchy on paper for a React application makes building it much easier."),
    new Lesson("April 22, 2021", "For recording purposes, the microphone on traditional \"wire\" headphones is superior to the microphone on AirPods."),
    new Lesson("April 21, 2021", "Seriously, go to the dentist every 6 months."),
    new Lesson("April 20, 2021", "Trees may improve immunity thanks to certain aromatic compounds they release."),
    new Lesson("April 21 - May 18, 2021", "FastAPI, SQLAlchemy, SQLite, and Deta.sh, including Deta micros and Deta bases.")
];

function LessonRow(props) {
    return (
        <tr>
            <td className="tabledate">{props.date}</td>
            <td>{props.lesson}</td>
        </tr>
    );
}

function LessonTable(props) {
    const rows = props.rows;
    const listRows = rows.map((row) => {
        return <LessonRow
                key={row.date}
                date={row.date}
                lesson={row.lesson}
                />
    });
    return (
        <table>
            <tbody>
                <tr>
                    <th className="dateheader">Date</th>
                    <th>What I learned</th>
                </tr>
                {listRows}
            </tbody>
        </table>
    )
}

const TodayILearned = () => {
    return (
        <div className="tilpage">
            <Navigation />
            <div className ="content tilcontent">
                <div className="tiltextdescription">
                    <h1 className="tiltitle">Today I learned</h1>
                    <p>Distilling my learnings down to a few things per day(s)</p>
                </div>
                <div className="tiltablecontainer">
                    <LessonTable rows={lessonArray} />
                </div>
            </div>
        </div>
    )
}

export default TodayILearned;