import { Box, Stack, Text, Image, Spacer } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { news_data } from "../Redux/action";

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  useEffect(() => {
    if (news.length === 0) {
      dispatch(news_data());
    }
  }, [dispatch, news.length]);

  return (
    <div style={{ backgroundColor: "rgb(247, 248, 248)" }}>
      <Image
        padding="10px"
        margin="auto"
        src="https://tpc.googlesyndication.com/simgad/16233217720762028300?"
      />

      <Box marginLeft="10%" marginBottom="10px">
        <Stack direction="row" gap="10px">
          <Box w="65%" borderWidth="1px" borderRadius="10px" bg="white">
            <Text paddingLeft="15px" paddingBottom="20px" paddingTop="15px">
              <Text fontSize="30px" as="b">
                Latest News
              </Text>
            </Text>
            <Box>
              {news.length > 0 &&
                news.map((e) => {
                  return (
                    <Box key={e.id} borderBottomWidth="1px" padding="15px">
                      <Link to={`/singlenews/${e.id}`}>
                        <Stack direction="row">
                          <Box maxWidth="250px">
                            <Image
                              src={e.img}
                              alt="img"
                              boxSize="100%"
                              borderRadius="5px"
                            />
                          </Box>
                          <Box paddingLeft="5px">
                            <Stack>
                              <Text as="b" fontSize="15px">
                                {e.headline}
                              </Text>
                              <Text fontSize="14px" color="rgb(72,73,74)">
                                {e.short_description}
                              </Text>
                            </Stack>
                            <Stack direction="row">
                              <Text fontSize="12px" color="rgb(72,73,74)">
                                {e.time}{" "}
                              </Text>
                              <Text fontSize="12px" color="rgb(72,73,74)">
                                &bull;
                              </Text>
                              <Text fontSize="12px" color="rgb(72,73,74)">
                                {e.author}
                              </Text>
                            </Stack>
                          </Box>
                        </Stack>
                      </Link>
                    </Box>
                  );
                })}
            </Box>
          </Box>
          <Box w="23%">
            <Box h="560px" borderWidth="1px" borderRadius="10px" bg="white">
              <Box padding="10px">
                <Text fontSize="14px" as="b">
                  Most Read
                </Text>
              </Box>
              <Box borderBottomWidth="1px"></Box>
              {news.length > 0 &&
                news.slice(10, 15).map((e) => {
                  return (
                    <Box
                      paddingLeft="10px"
                      paddingRight="15px"
                      paddingTop="10px"
                      key={e.id}
                    >
                      <Link to={`/singlenews/${e.id}`}>
                        <Stack direction="row">
                          <Box
                            maxHeight="60px"
                            paddingTop="5px"
                            maxWidth="60px"
                          >
                            <Image
                              boxSize="100%"
                              objectFit="cover"
                              borderRadius="7px"
                              src={e.img}
                            />
                          </Box>
                          <Box>
                            <Text fontWeight="600" fontSize="14px">
                              {e.headline}
                            </Text>
                            <Stack direction="row">
                              <Text fontSize="10px" color="rgb(72,73,74)">
                                {e.time}
                              </Text>
                              <Text fontSize="12px" color="rgb(72,73,74)">
                                &bull;
                              </Text>
                              <Text fontSize="10px" color="rgb(72,73,74)">
                                {e.author}
                              </Text>
                            </Stack>
                          </Box>
                        </Stack>
                      </Link>
                    </Box>
                  );
                })}
            </Box>
            <Box position="sticky" top="0">
              <Spacer h="3" />
              <Image src="https://tpc.googlesyndication.com/simgad/2618765116939835931?" />
              <Spacer h="5" />
              <Image src="https://tpc.googlesyndication.com/simgad/13142129632033508064?" />
              <Spacer h="5" />
              <Image src="https://tpc.googlesyndication.com/simgad/11639078905771269026?" />
            </Box>
          </Box>
        </Stack>
      </Box>
      <Footer />
    </div>
  );
};

// import { Box, Stack, Text, Image, Center, Spacer } from "@chakra-ui/react";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { news_data } from "../Redux/action";

// const News = () => {
//   const dispatch = useDispatch();
//   const news = useSelector((state) => state.news);
//   useEffect(() => {
//     if (news.length === 0) {
//       dispatch(news_data());
//     }
//   }, [dispatch, news.length]);
// >>>>>>> main

//   return (
//     <div style={{ backgroundColor: "rgb(236, 236, 236)" }}>
//       <Image
//         padding="10px"
//         margin="auto"
//         src="https://tpc.googlesyndication.com/simgad/16233217720762028300?"
//       />

//       <Box marginLeft="10%">
//         <Stack direction="row" gap="10px">
//           <Box w="65%" borderWidth="1px" borderRadius="10px" bg="white">
//             <Text paddingLeft="15px" paddingBottom="20px" paddingTop="15px">
//               <Text fontSize="30px" as="b">
//                 Latest News
//               </Text>
//             </Text>
//             <Box>
//               {news.length > 0 &&
//                 news.map((e) => {
//                   return (
//                     <Box key={e.id} borderBottomWidth="1px" padding="15px">
//                       <Link to={`/singlenews/${e.id}`}>
//                         <Stack direction="row">
//                           <Box maxWidth="250px">
//                             <Image
//                               src={e.img}
//                               alt="img"
//                               boxSize="100%"
//                               borderRadius="5px"
//                             />
//                           </Box>
//                           <Box paddingLeft="5px">
//                             <Stack>
//                               <Text as="b" fontSize="15px">
//                                 {e.headline}
//                               </Text>
//                               <Text fontSize="14px" color="rgb(72,73,74)">
//                                 {e.short_description}
//                               </Text>
//                             </Stack>
//                             <Stack direction="row">
//                               <Text fontSize="12px" color="rgb(72,73,74)">
//                                 {e.time}{" "}
//                               </Text>
//                               <Text fontSize="12px" color="rgb(72,73,74)">
//                                 &bull;
//                               </Text>
//                               <Text fontSize="12px" color="rgb(72,73,74)">
//                                 {e.author}
//                               </Text>
//                             </Stack>
//                           </Box>
//                         </Stack>
//                       </Link>
//                     </Box>
//                   );
//                 })}
//             </Box>
//           </Box>
//           <Box w="23%">
//             <Box h="560px" borderWidth="1px" borderRadius="10px" bg="white">
//               <Box padding="10px">
//                 <Text fontSize="14px" as="b">
//                   Most Read
//                 </Text>
//               </Box>
//               <Box borderBottomWidth="1px"></Box>
//               {news.length > 0 &&
//                 news.slice(10, 15).map((e) => {
//                   return (
//                     <Box
//                       paddingLeft="10px"
//                       paddingRight="15px"
//                       paddingTop="10px"
//                       key={e.id}
//                     >
//                       <Link to={`/singlenews/${e.id}`}>
//                         <Stack direction="row">
//                           <Box
//                             maxHeight="60px"
//                             paddingTop="5px"
//                             maxWidth="60px"
//                           >
//                             <Image
//                               boxSize="100%"
//                               objectFit="cover"
//                               borderRadius="7px"
//                               src={e.img}
//                             />
//                           </Box>
//                           <Box>
//                             <Text fontWeight="600" fontSize="14px">
//                               {e.headline}
//                             </Text>
//                             <Stack direction="row">
//                               <Text fontSize="10px" color="rgb(72,73,74)">
//                                 {e.time}
//                               </Text>
//                               <Text fontSize="12px" color="rgb(72,73,74)">
//                                 &bull;
//                               </Text>
//                               <Text fontSize="10px" color="rgb(72,73,74)">
//                                 {e.author}
//                               </Text>
//                             </Stack>
//                           </Box>
//                         </Stack>
//                       </Link>
//                     </Box>
//                   );
//                 })}
//             </Box>
//             <Box>
//               <Spacer h="3" />
//               <Image src="https://tpc.googlesyndication.com/simgad/2618765116939835931?" />
//               <Spacer h="5" />
//               <Image src="https://tpc.googlesyndication.com/simgad/13142129632033508064?" />
//               <Spacer h="5" />
//               <Image src="https://tpc.googlesyndication.com/simgad/11639078905771269026?" />
//             </Box>
//           </Box>
//         </Stack>
//       </Box>
//     </div>
//   );
// };

export default News;
