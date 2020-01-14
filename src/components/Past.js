import React from "react";

export default class Past extends React.Component {
    state = {
        loading: true,
        todos: null
    };

    componentDidMount() {
        fetch('https://api.spacexdata.com/v3/launches/latest')
            .then(res => res.json())
            .then((data) => {
                this.setState({ todos: data,loading: false });
                console.log(this.state.todos);
            })
            .catch(console.log)
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.todos) {
            return <div>didn't get a person</div>;
        }

        return (
            <div>
                <div>PAST</div>
                <div>{this.state.todos.flight_number}</div>
                <div>{this.state.todos.mission_name}</div>
                <div>{this.state.todos.rocket.rocket_name}</div>
                <div>{this.state.todos.launch_site.site_name}</div>
                <div>{this.state.todos.launch_date_local}</div>
            </div>
        );
    }
}