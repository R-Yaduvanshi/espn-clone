// <<<<<<< HEAD
// import React, { useEffect, useState } from 'react'
// import {Link, useParams} from 'react-router-dom'
// import {useSelector,useDispatch} from 'react-redux'
// import { news_data} from '../Redux/action'
// import {Box,Text,Image, Stack, Grid,GridItem, Spacer} from "@chakra-ui/react"
// import Footer from '../Components/Footer'
// =======
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { news_data } from "../Redux/action";
import {
  Box,
  Text,
  Image,
  Stack,
  Grid,
  GridItem,
  Spacer,
} from "@chakra-ui/react";
import Footer from "../Components/Footer";


const SingleNews = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const [currNews, setCurrNews] = useState({});

  useEffect(() => {
    if (news.length === 0) {
      dispatch(news_data());
    }
  }, [dispatch, news.length]);

  useEffect(() => {
    if (id) {
      const currNews = news.find((n) => n.id === Number(id));
      currNews && setCurrNews(currNews);
    }
  }, [id, news]);
  const data = [];
  if (currNews.full_desciption !== undefined) {
    // console.log(...currNews.full_desciption)
    data.push(...currNews.full_desciption);
  }
  // console.log(data,"hello")

  return (

   
    <div style={{ backgroundColor: "rgb(236, 236, 236)" }}>
      <Image
        padding="10px"
        margin="auto"
        src="https://tpc.googlesyndication.com/simgad/16233217720762028300?"
      />
      <Box marginLeft="10%">
        <Box>
          <Stack direction="row">
            <Box w="23%" h="800px" bg="white" borderRadius="10px" position="sticky" top="0px">
              <Box padding="15px 0px 15px 0px">
                {news.slice(9, 10).map((e) => {
                  return (
                    <Box key={e.id} padding="0px 15px 0px 15px">
                      <Link to={`/singlenews/${e.id}`}>
                        <Text>{e.headline}</Text>
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
                      </Link>
                    </Box>
                  );
                })}
              </Box>
              <Image
                src="https://tpc.googlesyndication.com/simgad/605161044816525343?"
                alt="img_Ad"
              />
              <Spacer h="3" />
              <Image src="https://tpc.googlesyndication.com/simgad/7878157276616870270?" />
              <Spacer h="3" />
              <Image src="https://tpc.googlesyndication.com/simgad/1350654057507125249?" />
              <Spacer h="3" />
              {/* <Image src="https://secure-ds.serving-sys.com/resources/PROD/asset/144375/IMAGE/20220809/Rbi_ENG_2_300x250_8aug22_72879983665627947.jpg" /> */}

            </Box>
            <Box
              bg="white"
              w="65%"
              borderWidth="1px"
              borderRadius="10px"
              padding="30px"
            >
              <Stack>
                <Text fontSize="15px" as="b" color="rgb(25, 170, 228)">
                  {" "}
                  NEWS
                </Text>
                <Text fontSize="27px" as="b">
                  {currNews.headline}
                </Text>
                <Text fontSize="17px" color="rgb(79,79,79)">
                  {currNews.short_description}
                </Text>
                <Text fontSize="16px" as="u" color="black">
                  {currNews.author}
                </Text>
                <Text
                  fontSize="14px"
                  color="rgb(72,73,74)"
                  lineHeight="5px"
                  paddingBottom="10px"
                >
                  {" "}
                  {currNews.time}{" "}
                </Text>
                <Box borderRadius="15px" paddingBottom="-15px" bg="black">
                  <Image borderRadius="15px 15px 0px 0px" src={currNews.img} />
                  <Text padding="15px" color="white">
                    {" "}
                    {currNews.img_desc}
                  </Text>
                </Box>
                <Text fontSize="16px" as="i" color="rgb(72,73,74)">
                  {currNews.short_description_2}
                </Text>
                <Text fontSize="16px" color="rgb(1,1,1)">
                  {currNews.desc_heading}
                </Text>
                <Box>
                  {data.map((e) => {
                    return (
                      <Box key={e.id}>
                        <Text
                          fontSize="16px"
                          paddingBottom="10px"
                          color="rgb(72,73,74)"
                        >
                          {e.desc1}
                        </Text>
                      </Box>
                    );
                  })}
                </Box>
              </Stack>
              {/* advertisement box and related news box */}
              <Box marginLeft="5%">
                <Stack direction="row" spacing="44px">
                  <Image src="https://tpc.googlesyndication.com/simgad/10028855014806727821?" />
                  <Box borderRadius="5px" borderWidth="1px" w="40%">
                    <Box padding="7px" borderBottomWidth="1px">
                      <Text as="b">Related</Text>
                    </Box>
                    <Box padding="7px">
                      {news.length > 0 &&
                        news.slice(19, 23).map((e) => {
                          return (
                            <Box key={e.id} padding="5px">
                              <Link to={`/singlenews/${e.id}`}>
                                <Stack direction="row">
                                  <Image
                                    boxSize="50px"
                                    objectFit="cover"
                                    borderRadius="3px"
                                    src={e.img}
                                  />
                                  <Text fontSize="12px" as="b">
                                    {e.headline}
                                  </Text>
                                </Stack>
                              </Link>
                            </Box>
                          );
                        })}
                    </Box>
                  </Box>
                </Stack>
                <Box borderBottomWidth="1px" padding="20px"></Box>
              </Box>
              <Text marginTop="20px" marginBottom="20px">
                <Text as="b">You May Like</Text>
              </Text>
              <Box borderWidth="1px" padding="10px" borderRadius="5px">
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                  {news.length > 0 &&
                    news.slice(24, 30).map((e) => {
                      return (
                        <GridItem key={e.id} w="100%">
                          <Link to={`/singlenews/${e.id}`}>
                            <Image src={e.img} alt="img" />
                            <Text as="b" fontSize="14px">
                              {e.headline}
                            </Text>
                          </Link>
                        </GridItem>
                      );
                    })}
                </Grid>
              </Box>
              <Stack direction="row" margin="10px">
                <Text fontSize="12px" color="rgb(72,73,74)">
                  Terms of Use
                </Text>
                <Text fontSize="12px" color="rgb(72,73,74)">
                  &bull;
                </Text>
                <Text fontSize="12px" color="rgb(72,73,74)">
                  {" "}
                  Privacy Policy
                </Text>
                <Text fontSize="12px" color="rgb(72,73,74)">
                  &bull;
                </Text>
                <Text fontSize="12px" color="rgb(72,73,74)">
                  Interest-Based Ads
                </Text>
                <Text fontSize="12px" color="rgb(72,73,74)">
                  &bull;
                </Text>
                <Text fontSize="12px" color="rgb(72,73,74)">
                  Addendum to the Global Policy
                </Text>
                <Text fontSize="12px" color="rgb(72,73,74)">
                  &bull;
                </Text>
                <Text fontSize="12px" color="rgb(72,73,74)">
                  Feedback
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Box>

    </Box>
    {/* <Footer/> */}

     

    </div>
  );
};

export default SingleNews;
