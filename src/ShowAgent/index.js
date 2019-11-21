<<<<<<< HEAD
import React from 'react'
import { Card, Button, Image, Icon } from 'semantic-ui-react'

const CardExampleCard = () => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
=======
import React from 'react';
import { Card, Button, Image, Icon } from 'semantic-ui-react'


function ShowAgent(props) {
	return(
  <Card>
    <Image src='https:react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.user.first_name}</Card.Header>
>>>>>>> 5fe537c3cdc6766dd335a479895172b42e297a26
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
<<<<<<< HEAD
)

export default CardExampleCard
=======
  )
}

export default ShowAgent
>>>>>>> 5fe537c3cdc6766dd335a479895172b42e297a26
