import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
    Container,
    List,
    Segment
} from 'semantic-ui-react';

const Footer = props => {
    return (
        <div>
            <Segment inverted style={{ margin: '5em 0em 0em', padding: '2em 0em' }} vertical>
                <Container textAlign='center'>
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='http://eraykisabacak.com' target="_blank">
                            Eray Kisabacak
                        </List.Item>
                        <List.Item as='a' href='https://www.linkedin.com/in/eraykisabacak/' target="_blank">
                            Linkedin
                        </List.Item>
                    </List>
                </Container>
            </Segment>
        </div>
    );
};

export default Footer;