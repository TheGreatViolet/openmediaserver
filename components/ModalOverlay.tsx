import { useEffect } from "react";

type ModalType = "confirm" | "alert" | "prompt";

interface ModalOverlayProps {
  title: string;
  description?: string;
  subtext?: string;
  type: ModalType;
  onTextChange?: (text: string) => void;
  show: boolean;
}

export default function ModalOverlay(props: ModalOverlayProps) {
  const { title, description, subtext, type, onTextChange, show } = props;

  useEffect(() => {
    if (type === "prompt" && !onTextChange) {
      throw new Error(
        "[ModalOverlay] Invalid Prop: onTextChange is required for prompt modal"
      );
    }
  }, []);

  return (
    <div className={`${show ? null : "invisible"}`}>
      <div
        className="z-10 w-56 h-20 bg-storm-gray-800
        border-storm-gray-900 border-2
        rounded-lg shadow-lg p-4
        motion-safe:transition-opacity duration-200"
      ></div>
    </div>
  );
}
