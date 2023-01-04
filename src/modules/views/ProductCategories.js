import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Hjdo from '../../components/Hjdo';
import { NavLink, Link, Route, Routes } from 'react-router-dom';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,

  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'images/KakaoTalk_20221221_133616863_04.jpg',
    title: 'BAM',
    width: '40%',
  },
  {
    url: 'images/jh.jpg',
    title: 'JUN',
    width: '20%',
  },
  {
    url: 'images/KakaoTalk_20221221_134617545_04.jpg',
    title: 'TTAC',
    width: '40%',
  },
  {
    url: 'images/doe.jpg',
    title: 'DOE',
    width: '38%',
  },
  {
    url: 'images/KakaoTalk_20221227_140444502.jpg',
    title: 'YB',
    width: '38%',
  },
  {
    url: 'images/bam.png',
    title: 'BUM',
    width: '24%',
  }
];

function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        TTAC Team Members
      </Typography>
      {/* <Routes>
        <Route path='/DOE' element={<Hjdo />} />
      </Routes> */}
      <Link to='/DOE'>이동</Link>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
            <ImageIconButton
             
              style={{
                width: image.width,
              }}
            >

              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 40%',
                  backgroundImage: `url(${image.url})`,
                }}
              />

              <ImageBackdrop className="imageBackdrop" />
              <Link to={image.title}>
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'common.white',
                }}
              >
                
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className="imageTitle"
                >
                  {image.title}
                  <div className="imageMarked" />
                </Typography>
              </Box></Link>
            </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
function Test() {

}
export default ProductCategories;