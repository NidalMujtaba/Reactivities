import { Activity } from '../../../app/models/activity';
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Image,
    Button,
  } from 'semantic-ui-react'

interface Props {
    activity: Activity;
    cancelSelectedActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({activity, cancelSelectedActivity, openForm} : Props) {
    return (
        <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
        <CardContent>
          <CardHeader>{activity.title}</CardHeader>
          <CardMeta>
            <span> {activity.date} </span>
          </CardMeta>
          <CardDescription>
            {activity.description}
          </CardDescription>
        </CardContent>
        <CardContent extra>
            <Button.Group widths={'2'}>
                <Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit'/>
                <Button onClick={cancelSelectedActivity} basic color='grey' content='Cancel'/>
            </Button.Group>
        </CardContent>
      </Card>

    )
}