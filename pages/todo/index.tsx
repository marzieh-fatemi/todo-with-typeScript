//import Component
import CardButtonComponent from "@/components/CardButton";
import InputTodoSection from "@/components/InputTodoSection";
import TableComponent from "@/components/TableComponent";
//import mui
import { Box } from "@mui/material";
//import Hooks
import { useEffect, useState } from "react";

export default function TodoMain() {
  const [todoArray, setTodoArray] = useState<any[]>([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [filter, setFilter] = useState<any | null>("All");
  const [toggleInitializeData, setToggleInitializeData] = useState(false);

  //useEfect for create localStorage and Update
  useEffect(() => {
    if (localStorage.getItem("task") === null) {
      localStorage.setItem(
        "task",
        JSON.stringify({
          todoArray: [
            {
              id: 0,
              task: "no Data",
              date: "",
              Complete: "",
            },
          ],
        })
      );
    }
    setTodoArray(JSON.parse(localStorage.getItem("task") || "").todoArray);
  }, [toggleInitializeData]);

  //function for delete all data in localStorage
  const deleteAll = () => {
    localStorage.clear();
    setToggleInitializeData(!toggleInitializeData);
  };
  //function for deleted one as id number
  const deleteId = (id: String) => {
    const filter = todoArray.filter((item) => item.id !== id);
    console.log("filter", filter);
    localStorage.setItem(
      "task",
      JSON.stringify({
        todoArray: filter,
      })
    );
    setToggleInitializeData(!toggleInitializeData);
  };
  //setState for input
  const handleChangeInputTitle = (event: any) => {
    setInputTitle(event.target.value);
  };
  //setState for input
  const handleChangeDate = (event: any) => {
    setInputDate(event.target.value);
  };
  //function for do & undo
  const toggleHandler = (id: String) => {
    const newTodos = todoArray.map((todo) => {
      if (todo.id == id) {
        return {
          id: todo.id,
          task: todo.task,
          date: todo.date,
          Complete: !todo.Complete,
        };
      } else {
        return todo;
      }
    });
    localStorage.setItem(
      "task",
      JSON.stringify({
        todoArray: newTodos,
      })
    );
    setToggleInitializeData(!toggleInitializeData);
  };
  //function for add task in lockalStorage
  const addTask = () => {
    if (inputTitle) {
      let task = JSON.parse(localStorage.getItem("task") || "");
      let todoArray = task.todoArray;
      console.log("todoArray", todoArray);
      todoArray = [
        ...todoArray,
        {
          id: todoArray.length,
          task: inputTitle,
          date: inputDate,
          Complete: false,
        },
      ];
      let updatedData = (task = { ...task, todoArray });
      console.log("update::", updatedData);
      localStorage.setItem("task", JSON.stringify(updatedData));
      setInputTitle("");
      setInputDate("");
      setToggleInitializeData(!toggleInitializeData);
    }
  };

  const handleFilterChange = (filter: String) => setFilter(filter);

  return (
    <>
      <Box sx={{ maxWidth: "70%", margin: "auto" }}>
        <InputTodoSection
          title={inputTitle}
          date={inputDate}
          handleChangeTitle={handleChangeInputTitle}
          handleChangeDate={handleChangeDate}
          addTask={addTask}
          filter={filter}
        />
        <CardButtonComponent
          deleteAll={deleteAll}
          handleFilterChange={handleFilterChange}
        />
        <TableComponent
          task={todoArray}
          deleteId={deleteId}
          toggleHandler={toggleHandler}
          filter={filter}
        />
      </Box>
    </>
  );
}
