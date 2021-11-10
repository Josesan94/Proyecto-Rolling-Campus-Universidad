import React from 'react'
import {Grid, makeStyles, Typography} from '@material-ui/core'
import logo3 from '../../assets/images/cientific.jpg';
import '../../styles/becas.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function Becas(props) {
    const classes = useStyles()
    const bull = <span className={classes.bullet}>•</span>;
    
    return (
        <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
>
            <Grid item xs> 
            <Grid 
        className="grid-becas"
        container 
        direction="column"
        justify="space-around"
        alignItems="center"
        
     
        >
            
            <img src={logo3} alt="texto descriptivo" >
                
            </img>
            
            
        </Grid>
           </Grid>
           <Grid item xs>
           <Grid 
        className="grid-becas"
        container 
        direction="column"
        justify="space-around"
        alignItems="center"
        spacing={0}
     
        >
            <Grid item xs>
            <Card className={classes.root} variant="outlined">
      <CardContent>
         <img src={logo3} alt="texto descriptivo" width="100%" height="50%"/>
        <Typography variant="h5" component="h2">
          Becas disponibles
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Ver condiciones
        </Typography>
        <Typography variant="body2" component="p">
         Nuestras becas se caracterizan por ser de las de mayor calidad en el pais. Contamos con un numero amplio de posibilidades de acceder a la misma. El desempeño academico, la voluntad y las ganas de crecer son los pilares fundamentales en los que nuestra universidad se basa
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
              
            </Grid>
        </Grid>
           </Grid>
        </Grid>
    )
}

export default Becas;
