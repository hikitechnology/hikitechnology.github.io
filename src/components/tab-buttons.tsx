import { useState } from "react";
import { Button } from "./ui/button";

type Props = {
  buttons: {
    name: string;
    onClick?: () => void;
  }[];
  defaultSelection?: string;
};

export default function TabButtons({ buttons, defaultSelection }: Props) {
  const [selected, setSelected] = useState<string>(
    defaultSelection ?? buttons[0].name,
  );

  return (
    <div className="flex gap-1 p-1 bg-zinc-800/50 backdrop-blur-sm rounded border border-zinc-700/50 w-min">
      {buttons.map((button) => (
        <Button
          key={button.name}
          variant={button.name === selected ? "default" : "ghost"}
          onClick={() => {
            setSelected(button.name);
            if (button.onClick) {
              button.onClick();
            }
          }}
          className={
            button.name === selected
              ? "bg-green-600 text-black hover:bg-green-500 font-mono"
              : "text-zinc-300 hover:bg-zinc-700 hover:text-green-400 font-mono"
          }
        >
          {button.name}
        </Button>
      ))}
    </div>
  );
}
