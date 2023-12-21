import { Grid, Card, CardGroup } from "semantic-ui-react";
import { DisplayType } from "./";
import Movie from "../movie";
import { Link } from "react-router-dom";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  release_data: string;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
}

export const ColumnDisplay = (props: Props) => {
  const { data, displayType } = props;

  return (
    <Grid
      columns={4}
      stackable
      centered
      verticalAlign="top"
      padded="vertically"
    >
      {data.map((displayData: DisplayData) => (
        <Grid.Column key={displayData.id}>
          <CardGroup>
            <Link to={`/${displayType === DisplayType.Movies ? 'movie' : 'tvshow'}/${displayData.id}`}>
            <Card
              fluid
              image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
              header={displayType === DisplayType.Movies ? displayData.title : displayData.name}
              meta={`Release Data: ${displayData.release_data} | Rating: ${displayData.vote_average}`}
              description={displayData.overview.slice(0, 350) + '...'}
            />
            </Link>
          </CardGroup>
        </Grid.Column>
      ))}
    </Grid>
  );
};
