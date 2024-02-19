import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const onCancel = () =>{
        reset();
        setIsOpen(false);
    }

    const onSubmit = (data) =>{
        dispatch(addTask(data));
        onCancel();
    }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Codecraft Team">
    <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
    <input
            type="text"
            placeholder="Task Title"
            {...register("title", { required: "Task title is required" })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
          />
          <input
            type="text"
            placeholder="Task Description"
            {...register("description")}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none mt-2"
          />
          <input
            type="date"
            {...register("deadline")}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none mt-2"
          />
          <select
            {...register("assign to")}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none mt-2"
          >
            <option value="asad ahmed">Asad Ahmed</option>
            <option value="robiul islam">Robiul Islam</option>
            <option value="dip pramanik">Dip Pramanik</option>
            <option value="benjir sultana">Benjir Sultana</option>
            <option value="shakil ahmed">Shakil Ahmed</option>
            <option value="sourav datta">Sourav Datta</option>
          </select>
          <select
            {...register("priority")}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none mt-2"
          >
            <option value="low">Low Priority</option>
            <option value="moderate">Moderate Priority</option>
            <option value="high">High Priority</option>
          </select>
          <div className="flex gap-3">
          <button
            onClick={() => onCancel()}
            className="mt-2 px-4 py-2 btn-danger text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="mt-2 px-4 py-2 btn-primary text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Submit
          </button>
          </div>
    </form>
    </Modal>
  );
};

export default AddTaskModal;
