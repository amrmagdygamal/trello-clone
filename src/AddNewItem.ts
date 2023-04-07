import { useState } from "react";
import { AddItemButton } from "./styles";

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

export const AddNewItem = ({
  onAdd,
  toggleButtonText,
  dark,
}: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
  }
  return (
    <AddItemButton dark={dark} onclick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
