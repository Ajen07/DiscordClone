"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import {  useRouter } from "next/navigation";

export const DeleteChannelModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const [isloading, setIsloading] = useState(false);
  const isModalOpen = isOpen && type === "deleteChannel";
  const { server, channel } = data;
  const onConfirm = async () => {
    try {
      setIsloading(true);
      await axios.delete(`/api/channels/${channel?.id}?serverId=${server?.id}`);
      onClose();
      router.refresh();
      router.push(`/server/${server?.id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Delete Channel
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Are you sure to want to delete "#
            <span className="font-semibold text-red-600">{channel?.name}</span>"
            ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="bg-gray-100 px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <Button
              disabled={isloading}
              onClick={onClose}
              variant="ghost"
              className="hover:bg-slate-200 hover:text-black"
            >
              Cancel
            </Button>
            <Button
              disabled={isloading}
              variant="destructive"
              onClick={onConfirm}
            >
              Delete
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
