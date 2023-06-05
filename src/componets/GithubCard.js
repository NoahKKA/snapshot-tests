import { Card } from 'react-bootstrap'
import React from 'react'

export default function GithubCard(){
    return (
        <div>
            <Card style={{width: '10rem'}}>
                <Card.Body>
                    <Card.Title> Github User </Card.Title>
                        <Card.Text>
                            Username = NoahKKA
                        </Card.Text>
                        <Card.Img  variant='top' src='https://avatars.githubusercontent.com/u/53351750?v=4' alt='Github Profile Picture'/>
                        <Card.Text>
                            This is a Card that was made using react-bootstrap.
                        </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}