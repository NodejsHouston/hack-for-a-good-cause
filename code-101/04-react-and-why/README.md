# What is React
It is only the view layer. The thing you see and touch (with a mouse or keyboard). You can pass into a React component Javascript properties like strings, objects, or even functions. Then the React component can do what ever it wants with it.

```

function HelloMessage(props) {
  return <div>Hello {props.name}</div>;
}

ReactDOM.render(<HelloMessage name="World" />, document.getElementById('container'));

```

 #### Converted JSX

```
function HelloMessage(props) {
  return React.createElement(
    "div",
    null,
    "Hello ",
    props.name
  );
}

ReactDOM.render(React.createElement(HelloMessage, { name: "World" }), document.getElementById('container'));
```

# What makes React different from other view layers.
It's just Javascript. Most view layers have the logic in a separate place. In React you can place your logic next to where things are supposed to happen.

```

const userList = [
  {
    name: "John",
    status: "cool"
  },
  {
    name: "Matt",
    status: "awesome"
  },
  {
    name: "Jennifer",
    status: "cool"
  },
  {
    name: "Tom",
    status: "average"
  },
];


const AwesomeList = React.createClass({
  render: function() {
    return (
    	<ul>
      	{this.props.users.filter((user) => user.status === "cool").map((user) => {
					return <li>{user.name}</li>
        })}
      </ul>
    );
  }
});

ReactDOM.render(
  <AwesomeList users={userList} />,
  document.getElementById('container')
);


```

# What React is not
It is not your data fetching library, application state management library, or router. You might hear stuff like Flux or Redux but those are just wants to manage and handle your application state. You do not NEED those to build and application.


# Show a simple application
https://github.com/matthewsimo/intro-to-react
