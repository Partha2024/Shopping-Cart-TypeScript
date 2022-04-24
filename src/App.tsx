import React, { useState } from 'react';
import {useQuery} from 'react-query';
// components 
import { Container, GridJustification, Button, Typography, Card, CardContent, CardActions, CardActionArea} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
// styles
import { Wrapper } from './App.style';
//types
// export type CartItemType = {
//   id: number;
//   email: string;
//   first_name: string;
//   last_name: string;
//   avatar: string;
// };

// type Props = {
//   item: CartItemType,
//   handleAddToCart: (clickedItem: CartItemType) => void;
// }

const useStyles = makeStyles((theme) =>({
  root: {
    minWidth: '100%',   
    minHeight: '100%',    
    paddingTop: theme.spacing(),
  },
  card:{
    backgroundColor:theme.palette.grey[200]
  },
  grid:{
    width:"100vw",
    marginLeft:"0"
  }
}));
  
  export default function App() {
    const classes = useStyles();
    const [users, setUsers] = React.useState([]);
    const f = async () => {
      const res = await fetch("https://reqres.in/api/users/");
      const json = await res.json();
      setUsers(json.data);
    };
    React.useEffect(() => {
      f();
    }, []);
    return (
      <Container className={classes.root}>
        <Grid container spacing={5}>
          {users.length &&
            users.map((user) => {
              return (
                <Grid item sm={3}>{/* card  */}
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia component="img" image={user.avatar}   />
                        <CardContent>
                            <Typography variant='h5'>{user.first_name} {user.last_name}</Typography>
                            <Typography variant='subtitle1'>ID : {user.id}</Typography>
                            <Typography variant='subtitle1'>Email ID : {user.email}</Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                  </Grid>
              );
            })}
        </Grid>
      </Container>
    );
  }


    