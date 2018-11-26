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
    roleDescription: 'Helped design the UI of the application.',
    bio: 'CS',
    image: '../images/images/addison.jpg'
  },
  {
    name: 'Anna S.',
    role: 'Backend',
    roleDescription: 'Worked on setting up the database, communicating with the Android server, and user verification.',
    bio: 'CECS',
    image: '../images/images/anna.jpg'
  },
  {
    name: 'Jamie S.',
    role: 'Backend',
    roleDescription: 'Created the android interface for this project which spoofs and checks in to Arkaive',
    bio: 'CECS',
    image: '../images/images/jamie.jpg'
  },
  {
    name: 'Josh M.',
    role: 'Fullstack',
    roleDescription: 'Created the frontend for this website! And also worked on the backend with communication to the frontend.',
    bio: 'CS',
    image: '../images/images/joshmin.jpg'
  },
  {
    name: 'Sai A.',
    role: 'Backend',
    roleDescription: 'Worked on setting up the database, communicating with the Android server, and user verification.',
    bio: 'CS',
    image: '../images/images/sai.jpg'
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
            <Grid item xs key={idx}>
              <Bio
                name={member.name}
                role={member.role}
                roleDescription={member.roleDescription}
                shortBio={member.bio}
                imgSrc={member.image}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(About);
