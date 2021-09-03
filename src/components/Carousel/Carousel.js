import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './Carousel.css';



 const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const mjCarousel = [
  {
    id:1,
    label: 'We Are Open And Here To Help',
    imgPath: `https://www.mjseafood.com/assets/uploads/images/large/e92a07ae-ad75-40a6-bf7a-3538b974fbec.jpg?1630227094230https://www.mjseafood.com/assets/uploads/images/large/e92a07ae-ad75-40a6-bf7a-3538b974fbec.jpg?1630227094230`,
     
  },
  {
    label: '40 Years Of Fish Mongery',
    imgPath:'https://www.mjseafood.com/assets/uploads/images/large/c6399f5c-7de3-41c0-a532-c96d961e35d4.jpg?1630227076295',
  },
  {
    label: 'When It Comes',
    imgPath:'https://www.mjseafood.com/assets/uploads/images/large/b1a429cd-e63c-4d83-9bd9-5848ed55ddbf.jpg?1630229529217',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 90,
    flexGrow: 1,
    scroll:'hidden',
  },
  header: {
    width:'80%',
    display: 'flex',
    alignItems: 'center',
    height:  '500px',
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    overflowX:'auto'
  },
  img: {
    maxHeight: '80%',
    display: 'block',
    width: '100vw',
    
  },
}));

function Carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    
    <div className='carousel' style={{width:'100%'}}>
    
    <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        
      >
        {mjCarousel.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className='carousel-img' style={{width:'96%',height:'100%',marginLeft:'2%',marginRight:'2%'}} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
        
    </div>
   
  );
}

export default Carousel;