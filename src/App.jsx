import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GridItem, useDisclosure } from "@chakra-ui/react";
import {
  Main,
  StatusList,
  Title,
  AddTask,
  Tasks,
  EditTask,
} from "./common/components";

const addTaskGridProps = {
  colStart: { base: 1, lg: 6, xl: 5 },
  colEnd: 13,
};

const statusListGridProps = {
  colStart: { base: 1, lg: 1 },
  colEnd: { base: 13, lg: 6, xl: 5 },
};

const tasksListGridProps = {
  colStart: { base: 1, lg: 6, xl: 5 },
  colEnd: 13,
  overflow: "auto",
};

const App = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <BrowserRouter>
      <Main>
        <GridItem
          colStart={{ base: 1, lg: 1 }}
          colEnd={{
            base: 13,
            lg: `${isOpen ? 6 : 13}`,
            xl: `${isOpen ? 5 : 13}`,
          }}
        >
          <Title onToggle={onToggle} />
        </GridItem>

        {isOpen && (
          <GridItem {...addTaskGridProps}>
            <AddTask isOpen={isOpen} />
          </GridItem>
        )}

        <GridItem {...statusListGridProps}>
          <StatusList />
        </GridItem>

        <GridItem {...tasksListGridProps}>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/:taskId" element={<EditTask />} />
          </Routes>
        </GridItem>
      </Main>
    </BrowserRouter>
  );
};

export default App;
