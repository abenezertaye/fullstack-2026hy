const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Parts = (props) => {
  
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Parts name={props.part.name} exercises={props.part.exercises} />
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.exercisesSum}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };

  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };

  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  return (
    <div>
      {/**Header */}
      <Header course={course} />

      {/**Content */}
      <Content part={part1} />
      <Content part={part2} />
      <Content part={part3} />

      {/**Total */}
      <Total
        exercisesSum={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  );
};

export default App;
