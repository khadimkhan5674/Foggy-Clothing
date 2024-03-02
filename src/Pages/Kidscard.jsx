
// SingleKid.jsx
import React, { useEffect } from 'react';
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import SingleKids from "./SingleKids"
const SingleKid = ({ tour }) => {
  const navigate = useNavigate();

  const handleDetailsPage = () => {
    navigate(`/singleKids/${tour.id}`);
  };

  useEffect(() => {
    console.log('Tour Object:', tour);

    console.log('Image URL:', tour['image']);

  }, [tour]);

  return (
    <Box
      data-cy="tour-card"
      className="tour-card"
      width="250px"
      textAlign="center"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.4)"
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.2s"
    >
        {/* ------------------------------------- */}
      <Image

        src={tour['image']}

        alt="img"
        width="100%"
        height="300px"
        objectFit="cover"
        p={4}
      />
{/* ------------------------------------------------------------ */}
      <Box p={4}>
        

      <Heading fontSize="xl" data-cy="title">
        <Text data-cy="product-description">{tour['title']}</Text>
        </Heading>

        <Text data-cy="product-description">₹ {tour['price']}</Text>

       
        <Button
          data-cy="view-details-btn"
          onClick={handleDetailsPage}
          mt={4}
          border="1px solid teal"
          variant="solid"
        >
          View Details
        </Button>
      </Box>
    </Box>
  );
};

export default SingleKid;

