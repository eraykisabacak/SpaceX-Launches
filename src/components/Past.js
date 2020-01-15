import React from "react";
import {Grid,Table} from "semantic-ui-react";
import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

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
            //return <div>loading...</div>;
            return (<div className="sweet-loading">
                <BounceLoader
                    css={override}
                    size={80}
                    color={"#123abc"}
                    loading={this.state.loading}
                />
            </div>)
        }

        if (!this.state.todos) {
            return <div>didn't get a person</div>;
        }

        return (
            /*<div>
                <div>PAST</div>
                <div>{this.state.todos.flight_number}</div>
                <div>{this.state.todos.mission_name}</div>
                <div>{this.state.todos.rocket.rocket_name}</div>
                <div>{this.state.todos.launch_site.site_name}</div>
                <div>{this.state.todos.launch_date_local}</div>
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
                            <Table.Body >
                                <Table.Cell className="ui medium header">Launched</Table.Cell>
                                <Table.Row>
                                    <Table.Cell className="ui medium header">{this.state.todos.launch_date_local}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}