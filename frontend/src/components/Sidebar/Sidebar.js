import React, { useState } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { ImFilter } from "react-icons/im";
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import NavItem from "./NavItem";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouteLink,
} from "react-router-dom";
import { Box } from "@chakra-ui/layout";
import Edit from "../Edit/Edit";
import Query from "../Query/Query";
import Visualize from "../Visualize/Visualize";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  const [select, changeSelect] = useState("query");

  return (
      <Flex
        pos="sticky"
        left="5"
        h="95vh"
        marginTop="2.5vh"
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
        borderRadius={navSize === "small" ? "15px" : "30px"}
        w={navSize === "small" ? "75px" : "200px"}
        flexDir="column"
        justifyContent="space-between"
      >
        <Flex
          p="5%"
          flexDir="column"
          w="100%"
          alignItems={navSize === "small" ? "center" : "flex-start"}
          as="nav"
        >
          <IconButton
            background="none"
            mt={5}
            _hover={{ background: "none" }}
            icon={<FiMenu />}
            onClick={() => {
              if (navSize === "small") changeNavSize("large");
              else changeNavSize("small");
            }}
          />
          <NavItem
            navSize={navSize}
            icon={ImFilter}
            title="Query"
            link="query"
            active={select === "query" ? true : false}
            changeSelect={changeSelect}
          />
          <NavItem
            navSize={navSize}
            icon={AiOutlineEdit}
            title="Edit"
            link="edit"
            active={select === "edit" ? true : false}
            changeSelect={changeSelect}
          />
          <NavItem
            navSize={navSize}
            icon={AiOutlineEye}
            title="Visualize"
            link="visualize"
            active={select === "visualize" ? true : false}
            changeSelect={changeSelect}
          />
        </Flex>

        <Flex
          p="5%"
          flexDir="column"
          w="100%"
          alignItems={navSize === "small" ? "center" : "flex-start"}
          mb={4}
        ></Flex>
        <Flex flexDir="column">
        </Flex>
      </Flex>
  );
}
