const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Parts = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Parts name={props.part} exercise= {props.exercise} />
      <Parts name={props.part} exercise= {props.exercise} />
      <Parts name={props.part} exercise= {props.exercise} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercisesSum}
    </p>
  )
}

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      {/**Header */}
      <Header course = {course} />

      {/**Content */}
      <Content part = {part1} exercise = {exercises1} />
      <Content part = {part2} exercise = {exercises2} />
      <Content part = {part3} exercise = {exercises3} />

      {/**Total */}
      <Total exercisesSum={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;