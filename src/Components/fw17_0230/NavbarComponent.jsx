import { CheckIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import MainSubNavbar from "./NavbarItems/MainSubNavbar";
import {
  BsFillMoonFill,
  BsBellFill,
  BsFillGrid3X3GapFill,
  BsSearch,
} from "react-icons/bs";
import Example from "./NavbarItems/Edition";
import Edition from "./NavbarItems/Edition";

import { FaSearch, FaArrowRight } from "react-icons/fa";
import "../CSS/input0230.css";
import { Link, useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const NAV_ITEMS = [
    {
      label: "Live Score",
      href: "https://www.espncricinfo.com/video/can-virat-kohli-make-it-count-at-the-asia-cup-1330324",
      children: [
        {
          label: "Live Scores Home",
          href: "/livescore",
        },
        {
          label: "Week view",
          href: "#",
        },
        {
          label: "Month view",
          href: "#",
        },
        {
          label: "Season view",
          href: "#",
        },
        {
          label: "International calender",
          href: "#",
        },
        {
          label: "Desktop scorecard",
          href: "#",
        },
      ],
    },
    {
      label: "Series",
      href: "#",
      children: [
        {
          label: "Asia Cup",
          href: "#",
        },
        {
          label: "NZ-A in Ind",
          href: "#",
        },
        {
          label: "Australia Vs Zimbabwe",
          href: "#",
        },
        {
          label: "Australia Vs Zimbabwe",
          href: "#",
        },
        {
          label: "Australia Vs Zimbabwe",
          href: "#",
        },
      ],
    },
    {
      label: "Teams",
      href: "#",
      children: [
        {
          label: "India",
          href: "#",
        },
        {
          label: "Pakistan",
          href: "#",
        },
        {
          label: "Srilanks",
          href: "#",
        },
        {
          label: "Australia",
          href: "#",
        },
        {
          label: "England",
          href: "#",
        },
        {
          label: "Bangladesh",
          href: "#",
        },
        {
          label: "New Zealand",
          href: "#",
        },
      ],
    },
    {
      label: "News",
      href: "#",
      children: [
        {
          label: "News Home",
          href: "/news",
        },
        {
          label: "Feature of ODI",
          href: "#",
        },
        {
          label: "Ball Temparing",
          href: "#",
        },
      ],
    },
    {
      label: "Features",
      children: [
        {
          label: "Features Home",
          href: "#",
        },
        {
          label: "Australia Vs Zimbabwe",
          href: "#",
        },
        {
          label: "India Vs Pakistan",
          href: "#",
        },
        {
          label: "Bangladesh Vs Sri Lanka",
          href: "#",
        },
      ],
    },
    {
      label: "Videos",
      children: [
        {
          label: "Sachin's Best",
          href: "#",
        },
        {
          label: "Cricket",
          href: "#",
        },
        {
          label: "Aus Video",
          href: "#",
        },
        {
          label: "Eng Funny",
          href: "#",
        },
      ],
    },
    {
      label: "Stats",
      children: [
        {
          label: "IPL 2022",
          href: "#",
        },
        {
          label: "World Cup",
          href: "#",
        },
        {
          label: "ODI Ranking",
          href: "#",
        },
        {
          label: "Batsman Ranking",
          href: "#",
        },
      ],
    },
    {
      label: "Edition",
      children: [
        {
          label: "India",
          href: "#",
        },
        {
          label: "Australia",
          href: "#",
        },
        {
          label: "Pakistan",
          href: "#",
        },
        {
          label: "Sri Lanka",
          href: "#",
        },
        {
          label: "Bangladesh",
          href: "#",
        },
        {
          label: "England",
          href: "#",
        },
      ],
    },
  ];
  const [status, setStatus] = useState(false);

  const handleStatus = () => {
    setStatus(!status);
  };

  const handlePrevious = () => {
    setStatus(!status);
  };

  const ref = useRef();
  const navigate = useNavigate();

  return (
    <Navbar variant="dark" sticky="top" style={{ backgroundColor: "#03a9f4" }}>
      <Container style={{ marginLeft: "10px" }}>
        <Navbar.Brand href="/">
          <img
            src="https://wassets.hscicdn.com/static/images/logo.png"
            alt="espn logo"
            style={{ width: "138px", height: "20px" }}
            onClick={() => navigate("/newss")}
          />
        </Navbar.Brand>
        <Nav className="me-auto" style={{ display: "flex", gap: "130px" }}>
          <Nav.Link
          // style={{ border: "2px solid black" }}
          >
            <MainSubNavbar NAV_ITEMS={NAV_ITEMS} />
          </Nav.Link>

          {status ? (
            <Nav.Link className="search-box">
              <Stack>
                <InputGroup
                  style={{ backgroundColor: "white", borderRadius: "10px" }}
                >
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children={<BsSearch color="black" />}
                  />
                  <Input
                    placeholder="Search Players, Teams"
                    color="black"
                    _placeholder={{ opacity: 1, color: "grey.500" }}
                    // variant="unstyled"
                    // p={2}
                    ref={ref}
                  />
                  <InputRightElement
                    children={
                      <FaArrowRight color="black" onClick={handlePrevious} />
                    }
                  />
                </InputGroup>
              </Stack>
            </Nav.Link>
          ) : (
            <Nav.Link
              style={{
                // border: "2px solid black",
                display: "flex",
                // justifyContent: "space-between",
                width: "310px",
                gap: "20px",
                alignItems: "center",
                color: "white",
              }}
            >
              <BsFillMoonFill />
              <BsBellFill />
              <Menu>
                <MenuButton
                  style={{
                    width: "110px",
                    backgroundColor: "#03a9f4",
                    border: "none",
                    outline: "none",
                    borderRadius: "1px",
                  }}
                >
                  Language
                </MenuButton>
                <MenuList
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    borderRadius: "none",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <MenuItem color="black" style={{ borderRadius: "1px" }}>
                    English
                  </MenuItem>
                  <MenuItem color="black" style={{ borderRadius: "1px" }}>
                    Hindi
                  </MenuItem>
                </MenuList>
              </Menu>
              <BsFillGrid3X3GapFill />
              <BsSearch onClick={handleStatus} />
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
