import React from 'react';
import {Link} from "react-router-dom";
import {Header, Button, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const HeaderExamplePage = () => (
    <div>
        <Header as='h1'>SpaceX Launches</Header>
        <Segment>
            <Button href="/" inverted color='blue'>
                Next
            </Button>
            <Button href="/past" exact inverted color='green'>
                Past
            </Button>
        </Segment>
    </div>
)

export default HeaderExamplePage