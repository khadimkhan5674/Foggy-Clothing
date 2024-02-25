
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import {
//   Button,
//   Box,
//   Flex,
//   Alert,
//   AlertIcon,
//   AlertTitle,
//   AlertDescription,
//   CloseButton,
//   Heading,
//   Text,
//   Image,
// } from '@chakra-ui/react';

// const bookingurl = "https://moke-api-server.onrender.com/Kids"; // Replace with actual booking API URL
// const cartUrl = "YOUR_CART_API_URL"; // Replace with actual cart API URL
// const wishlistUrl = "YOUR_WISHLIST_API_URL"; // Replace with actual wishlist API URL
// const url = "https://moke-api-server.onrender.com/Kids"; // Replace with actual API URL

// const SingleKids = () => {
//   const [isAlertVisible, setAlertVisible] = useState(false);
//   const [timer, setTimer] = useState(60 * 60); // 60 minutes in seconds

//   const handleBookNowClick = () => {
//     setAlertVisible(true);
//   };

//   const handleAlertClose = () => {
//     setAlertVisible(false);
//   };

//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [singleData, setSingleData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`${url}`);
//         const data = res.data;
//         setSingleData(data);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error);
//         setIsLoading(false);
//       }
//     };
  
//     fetchData();
//   }, [id]);
  

//   const handleBooking = async () => {
//     try {
//       await axios.post(bookingurl, {
//         location: singleData['text-left'],
//         description: singleData['listprice'],
//         image: singleData['customFade src'],
//         price: singleData['product-price'],
//         ID: singleData['productlist href'],
//       });
//       navigate("/booking");
//     } catch (error) {
//       console.log("Error", error);
//     }
//   };

//   const handleAddToCart = async () => {
//     try {
//       await axios.post(cartUrl, {
//         location: singleData['text-left'],
//         description: singleData['listprice'],
//         image: singleData['customFade src'],
//         price: singleData['product-price'],
//         ID: singleData['productlist href'],
//       });
//       setAlertVisible(true);
//     } catch (error) {
//       console.log("Error adding to cart", error);
//     }
//   };

//   const handleAddToWishlist = async () => {
//     try {
//       await axios.post(wishlistUrl, {
//         location: singleData['text-left'],
//         description: singleData['listprice'],
//         image: singleData['customFade src'],
//         price: singleData['product-price'],
//         ID: singleData['productlist href'],
//       });
//       setAlertVisible(true);
//     } catch (error) {
//       console.log("Error adding to wishlist", error);
//     }
//   };

//   useEffect(() => {
//     // Start the timer countdown
//     const timerInterval = setInterval(() => {
//       setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
//     }, 1000);

//     // Clear the interval when the component is unmounted
//     return () => clearInterval(timerInterval);
//   }, []);

//   if (isLoading) {
//     return <h3>Loading....</h3>;
//   }

//   if (error) {
//     return <h1>Error loading tour details</h1>;
//   }
//   const {
//     'customFade src': src,
//     'text-left': title,
//     listprice,
//     description,
//     'product-price': price,
//     'percentage-off': discount
//   } = singleData;
//   return (
//     <Box
//       position="relative"
//       minHeight="100vh"
//       background={`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${src})`}
//       backgroundSize="cover"
//       backgroundPosition="center"
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Box
//         maxWidth="800px"
//         margin="auto"
//         padding="20px"
//         boxShadow="lg"
//         borderRadius="md"
//         marginTop="50px"
//         marginBottom="50px"
//         backgroundColor="gray.100"
//       >
//         <Flex direction={['column', 'row']} align="center">
//           <Box width={['100%', '50%']} pr={[0, 4]}>
//             <Image
//              width="100%"
//              height="100%"
//              src={singleData?.['customFade src'] || ""}
//              alt={singleData?.['text-left'] || ""}
//             />
//           </Box>

//           <Box width={['100%', '50%']} p={4} borderRadius="md">
//             <Heading mb={2} size="lg">
//               {title}
//             </Heading>
//             <Text fontSize="lg" color="black.500" mb={4}>
//               {listprice}
//             </Text>
//             <Text>{description}</Text>
//             <Text mt={4} fontWeight="bold">
//               Price: {price}
//             </Text>
//           </Box>
//         </Flex>

//         <Box mt={4} textAlign="center">
//           <Text mt={2} mb={4}>
//             {timer > 0 ? (
//               `Book now and get ${discount} off! (Offer ends in ${Math.floor(timer / 60)}:${timer % 60} minutes)`
//             ) : (
//               `Book now and get ${discount} off!`
//             )}
//           </Text>
//           <Button
//             onClick={handleBookNowClick}
//             colorScheme='teal'
//             _hover={{ bg: 'teal.800' }}
//             mt={2}
//           >
//             Add To Booking
//           </Button>
//           <Button
//             onClick={handleAddToCart}
//             colorScheme='teal'
//             _hover={{ bg: 'teal.800' }}
//             mt={2}
//             ml={2}
//           >
//             Add To Cart
//           </Button>
//           <Button
//             onClick={handleAddToWishlist}
//             colorScheme='teal'
//             _hover={{ bg: 'teal.800' }}
//             mt={2}
//             ml={2}
//           >
//             Add To Wishlist
//           </Button>
//         </Box>

//         {isAlertVisible && (
//           <Alert mt={6}>
//             <AlertIcon />
//             <Box textAlign="center">
//               <AlertTitle>Added!</AlertTitle>
//               <AlertDescription>
//                 Your favorite package has been added to Bookings
//                 <br />Few more steps to take off!
//               </AlertDescription>
//               <Box>
//                 <Button
//                   colorScheme='teal'
//                   _hover={{ bg: 'teal.800' }}
//                   onClick={handleBooking}
//                   mt={4}
//                 >
//                   Go To Booking
//                 </Button>
//               </Box>
//             </Box>
//             <CloseButton
//               alignSelf='flex-start'
//               position='relative'
//               right={-2}
//               top={-2}
//               onClick={handleAlertClose}
//             />
//           </Alert>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default SingleKids;
