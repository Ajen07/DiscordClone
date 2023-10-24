"use client";

import { Plus } from "lucide-react";
import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

const NavigationAction = () => {
  const { onOpen } = useModal();
  return (
    <div>
      <ActionTooltip side="right" label="Add a server" align="center">
        <button
          className="group flex items-center"
          onClick={() => onOpen("createServer")}
        >
          <div className="flex  items-center justify-center hover:rounded-[16px]  overflow-hidden transition-all  h-[48px] w-[48px] rounded-[24px] bg-primary  group-hover:bg-emerald-500 dark:bg-neutral-700">
            <Plus className="group-hover:text-white transition text-emerald-500" />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};

export default NavigationAction;
