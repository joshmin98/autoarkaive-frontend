import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Bio from '../components/Bio';

const styles = theme => ({
  root: {
    width: '80%',
    marginLeft: '10%'
  },
  grid: {
    marginTop: theme.spacing.unit * 5,
  }
});

const team = [
  {
    name: 'Addison A.',
    role: 'Design and Frontend',
    roleDescription: 'test',
    bio: 'test'
  },
  {
    name: 'Anna S.',
    role: 'Backend',
    roleDescription: 'test',
    bio: 'test'
  },
  {
    name: 'Jamie S.',
    role: 'Backend',
    roleDescription: 'test',
    bio: 'test'
  },
  {
    name: 'Josh M.',
    role: 'Fullstack',
    roleDescription: 'test',
    bio: 'test'
  },
  {
    name: 'Sai A.',
    role: 'Backend',
    roleDescription: 'test',
    bio: 'test'
  }
];

let About = props => {
  return(
    <div className={props.classes.root}>
      <Grid
        className={props.classes.grid}
        container
        spacing={24}
      >
        {team.map((member, idx) => {
          return(
            <Grid item xs>
              <Bio
                key={idx}
                name={member.name}
                role={member.role}
                roleDescription={member.roleDescription}
                shortBio={member.bio}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(About);
