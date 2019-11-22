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
        <Card.Header>{props.user.first_name}</Card.Header>
        <Card.Meta>
          <span>Joined Under Construction</span>
        </Card.Meta>
        <Card.Description>
          Agent Bio Under Construction
        </Card.Description>
      </Card.Content>
    </Card>
  );
}


export default ShowAgent;