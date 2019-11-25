import React from "react";
import { Card, Button, Image, Icon } from "semantic-ui-react";

function ShowAgent(props) {
  return (
    <Card>
      <Image
        src="https:react.semantic-ui.com/images/avatar/large/matthew.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{props.user.first_name} {props.user.last_name}</Card.Header>
        <Card.Meta>
          <span>Company Name: {props.user.company_name}</span>
          
        </Card.Meta>
        <Card.Description>
          
        </Card.Description>
      </Card.Content>
    </Card>
  );
}


export default ShowAgent;