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
      <Parts name={props.part[0].name} exercises={props.part[0].exercises} />
      <Parts name={props.part[1].name} exercises={props.part[1].exercises} />
      <Parts name={props.part[2].name} exercises={props.part[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.exercisesSum}</p>;
};

const App = () => {
  const course = "Half Stack application development";

  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },

    {
    name: "Using props to pass data",
    exercises: 7,
    },

    {
      name: "State of a component",
      exercises: 14,
    }
]
  return (
    <div>
      {/**Header */}
      <Header course={course} />

      {/**Content */}
      <Content part = {parts} />

      {/**Total */}
      <Total
        exercisesSum={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
    </div>
  );
};

export default App;
