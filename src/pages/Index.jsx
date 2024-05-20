import { Container, VStack, Heading, Input, Button, List, ListItem, IconButton, HStack, Text } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if(inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="full">
        <Heading as="h1" size="2xl" mb={6}>Todo List</Heading>
        <HStack w="full">
          <Input
            placeholder="Enter a new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <Button onClick={addTask} colorScheme="blue">Add Task</Button>
        </HStack>
        <List w="full" spacing={3}>
          {tasks.map((task, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" bg="gray.100" p={2} borderRadius="md">
              <Text>{task}</Text>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                colorScheme="red"
                onClick={() => deleteTask(index)}
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;