import './App.css';
import {Component} from "react";
import axios from "axios";


class App extends Component {

    state = {
        users: [],
        isLoading: true
    };

    componentDidMount() {

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json()).then(users => {
                this.setState({
                    users,
                    isLoading: false
                })
            });
        }, 2000)

    }

    render() {

        const {isLoading} = this.state
        return (
            <div className="App">
                <h1>Users</h1>
                {isLoading ? 'Loading.' : ""}
                {
                    !isLoading ?
                        this.state.users.map(user =>
                            <div key={user.id}>
                                {user.name} - @{user.username} </div>
                        ) : ""
                }

            </div>
        );
    }
}

export default App;
