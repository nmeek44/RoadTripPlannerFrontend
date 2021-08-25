import { Card, Icon, Button, Feed } from 'semantic-ui-react'
import React from 'react'
import { useHistory } from 'react-router';



const LocationFeed = (props) => {

    return(
        <Feed.Event>
          <Feed.Label />
          <Feed.Content>
            <Feed.Summary>
                {props.locationObject.name}
            </Feed.Summary>
            {/* <Feed.Date content='1 day ago' /> */}
          </Feed.Content>
        </Feed.Event>
    )
}

export default LocationFeed