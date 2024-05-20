import { useState } from "react";
import { Container, Text, VStack, Input, Button, List, ListItem, Checkbox, Flex } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((t, i) => {
      if (i === index) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl">To-Do List</Text>
        <Flex width="100%">
          <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            onKeyPress={(e) => e.key === "Enter" ? addTask() : null}
          />
          <Button leftIcon={<FaPlus />} onClick={addTask} ml={2} colorScheme="blue">
            Add
          </Button>
        </Flex>
        <List spacing={3} width="100%">
          {tasks.map((task, index) => (
            <ListItem key={index} display="flex" alignItems="center" justifyContent="space-between">
              <Checkbox
                isChecked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
                mr={3}
                flex="1"
              >
                <Text as={task.completed ? "del" : ""}>{task.text}</Text>
              </Checkbox>
              <Button size="sm" leftIcon={<FaTrash />} colorScheme="red" onClick={() => deleteTask(index)}>
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;