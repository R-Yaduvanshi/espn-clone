import { Box, Stack ,Text} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
  <div style={{backgroundColor:"rgb(247, 248, 248)"}}>
      <Box bg="white" borderWidth="1px" w="70%" marginLeft="15%"  marginBottom="15px" padding="15px" borderRadius="15px">
       <Stack direction="row" justifyContent="space-between">
       <Stack >
            <Box borderBottomWidth="1px" padding="5px"><Text as="b">Key Series</Text></Box>
            <Box lineHeight="8">
                <Text fontSize="15px">Asia Cup QLF</Text>
                <Text fontSize="15px">Asia Cup</Text>
                <Text fontSize="15px">Angland v South Africa</Text>
                <Text fontSize="15px">Australia v Zimbombe</Text>
                <Text fontSize="15px">NZ-A in IND</Text>
                <Text fontSize="15px">The Hundred(M)</Text>
                <Text fontSize="15px">The Hundred(W)</Text>
                <Text fontSize="15px">County Div1</Text>
                <Text fontSize="15px">County Div2</Text>
                <Text fontSize="15px">6IXTY(M)</Text>
                <Text fontSize="15px">6IXTY(W)</Text>
                <Text fontSize="15px">Women's Championship</Text>
                <Text fontSize="15px">World Test Championship</Text>
                <Text fontSize="15px">World Cup Super League</Text>
            </Box>
        </Stack>
        <Stack>
            <Box><Text as="b" borderBottomWidth="1px" padding="5px">Quick Links</Text></Box>
            <Box lineHeight="8">
            <Text fontSize="15px">T20 Time Out</Text>
            <Text fontSize="15px">T20 time Out Hindi</Text>
            <Text fontSize="15px">ICC Rankings</Text>
            <Text fontSize="15px">Fantasy Pick</Text>
            <Text fontSize="15px">Haan ya Na</Text>
            </Box>
        </Stack>
        <Stack>
            <Box><Text as="b" borderBottomWidth="1px" padding="5px">ESPNcricinfo Apps</Text></Box>
            <Box lineHeight="8">
                <Text fontSize="15px">Android App</Text>
                <Text fontSize="15px">iOS App</Text>
            </Box>
        </Stack>
        <Stack>
            <Box><Text as="b" borderBottomWidth="1px" padding="5px" >Follow ESPNcricinfo</Text></Box>
            <Box lineHeight="8">
            <Text fontSize="15px">Instagram</Text>
            <Text fontSize="15px">Twitter</Text>
            <Text fontSize="15px">Facebook</Text>
            <Text fontSize="15px">YouTube</Text>
            </Box>
        </Stack>
        <Stack>
            <Box><Text as="b" borderBottomWidth="1px" padding="5px">ESPN Sites</Text></Box>
            <Box lineHeight="8">
            <Text fontSize="15px">The Cricket Monthly</Text>
            <Text fontSize="15px">ESPN</Text>
            </Box>
        </Stack>
       </Stack>
    </Box>
    <Box  bg="rgb(241, 241, 241)" paddingBottom="15px">
        <Stack marginLeft="25%" direction="row" p={4}>
            <Text fontSize="15px">Terms of use </Text>
           <Text fontSize="15px">|</Text>
            <Text fontSize="15px">Privacy Policy</Text>
           <Text fontSize="15px">|</Text>
            <Text fontSize="15px">Interest-Bases Ads</Text>
           <Text fontSize="15px">|</Text>
            <Text fontSize="15px">Addendum to the Global Privacy Policy</Text>
           <Text fontSize="15px">|</Text>
            <Text fontSize="15px">Feedback</Text>
        </Stack>
        <Text marginLeft="35%" fontSize="14px">© 2022 ESPN Sports Media Ltd.All rights reserved</Text>
    </Box>
  </div>
  )
}

export default Footer