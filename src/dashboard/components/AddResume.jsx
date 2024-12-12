import { PlusSquare } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link, useNavigate } from "react-router-dom";

const AddResume = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleCreate = () => {
    if (inputValue.trim()) {
      navigate("/Edit", { state: { resumeTitle: inputValue.trim() } });
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className="h-[35vh] w-[13rem] mt-8 items-center flex border cursor-pointer justify-center bg-gray-400 transition-transform hover:scale-105 duration-300 rounded-md hover:shadow-xl border-dashed border-black"
        onClick={() => setOpen(true)}
      >
        <PlusSquare />
      </div>
      <div>
        <Dialog open={open}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create new resume</DialogTitle>
              <DialogDescription>
                Please add a title for your resume
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-2">
              <Input
                type="text"
                placeholder="Eg. Full Stack Developer"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border border-black"
              />
            </div>
            <div className="flex gap-3 justify-center mt-4">
              <Button
                className="border-black bg-white text-black border hover:bg-black hover:text-white duration-150"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className="border border-black duration-200"
                onClick={handleCreate}
                disabled={!inputValue.trim()}
              >
                Create
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AddResume;
