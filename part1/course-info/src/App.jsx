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

  const course = {
    name:"Half Stack application development",
    parts: [
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
  }

  return (
    <div>
      {/**Header */}
      <Header course={course.name} />

      {/**Content */}
      <Content part = {course.parts} />

      {/**Total */}
      <Total
        exercisesSum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
      />
    </div>
  );
};

export default App;
