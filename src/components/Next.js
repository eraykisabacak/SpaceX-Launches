import React from "react";
import Countdown from "./CountDown";
import { Grid,Table } from 'semantic-ui-react'

export default class Next extends React.Component {
    state = {
        loading: true,
        todos: null
    };

    componentDidMount() {
        fetch('https://api.spacexdata.com/v3/launches/next')
            .then(res => res.json())
            .then((data) => {
                this.setState({ todos: data,loading: false });
                console.log(this.state.todos);
            })
            .catch(console.log);
    }

    render() {
        //const currentDate = new Date();
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.todos) {
            return <div>didn't get a person</div>;
        }
        console.log(this.state.todos.launch_date_local);
        return (
            /*<div>
                <div>Next</div>
                <div>{this.state.todos.flight_number}</div>
                <div>{this.state.todos.mission_name}</div>
                <div>{this.state.todos.rocket.rocket_name}</div>
                <div>{this.state.todos.launch_site.site_name}</div>
                <div>{this.state.todos.launch_date_local}</div>
                <div>{typeof this.state.todos.launch_date_local}</div>
                <Countdown date={this.state.todos.launch_date_local} />
            </div>*/
            <Grid>
                <Grid.Row>

                    <Grid.Column width={6}>
                        <Table className="ui grid centered">
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell className="ui medium header">{this.state.todos.flight_number}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="ui medium header">{this.state.todos.mission_name}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="ui medium header">{this.state.todos.rocket.rocket_name}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="ui medium header">{this.state.todos.launch_site.site_name}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>

                    <Grid.Column width={10}>
                        <Table className="ui grid centered">
                            <Table.Body>
                                <Table.Cell className="ui medium header">Will be launched</Table.Cell>
                                <Table.Row>
                                    <Table.Cell>
                                        <Grid>
                                            <Countdown date={this.state.todos.launch_date_local} />
                                        </Grid>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}