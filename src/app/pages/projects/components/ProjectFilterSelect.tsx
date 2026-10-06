"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import type { ProjectFilter } from "@/app/pages/projects/models/project.model";
import { AppIcon } from "@/shared/components/ui/AppIcon/AppIcon";
import { SelectBox, SelectList, SelectOption, SelectTrigger } from "./ProjectFilterSelect.styles";

interface ProjectFilterSelectProps {
  filters: ProjectFilter[];
  labels: Record<ProjectFilter, string>;
  label: string;
  value: ProjectFilter;
  onChange: (value: ProjectFilter) => void;
}

export function ProjectFilterSelect({ filters, labels, label, value, onChange }: ProjectFilterSelectProps) {
  const listId = useId();
  const boxRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!open) return;

    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !boxRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open]);

  function select(filter: ProjectFilter) {
    onChange(filter);
    setOpen(false);
    triggerRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }

    if (open && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      select(filters[activeIndex]);
      return;
    }

    if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      setOpen(true);
      if (event.key === "Home") setActiveIndex(0);
      else if (event.key === "End") setActiveIndex(filters.length - 1);
      else if (!open) setActiveIndex(filters.indexOf(value));
      else setActiveIndex((index) =>
        (index + (event.key === "ArrowDown" ? 1 : -1) + filters.length) % filters.length
      );
    }
  }

  return (
    <SelectBox ref={boxRef} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <SelectTrigger
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-label={`${label}: ${labels[value]}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? `${listId}-${filters[activeIndex]}` : undefined}
        $open={open}
        onKeyDown={handleKeyDown}
        onClick={() => {
          setActiveIndex(filters.indexOf(value));
          setOpen((current) => !current);
        }}
      >
        {labels[value]}
        <AppIcon name="chevronDown" />
      </SelectTrigger>
      {open && (
        <SelectList id={listId} role="listbox" aria-label={label}>
          {filters.map((filter, index) => (
            <SelectOption
              key={filter}
              id={`${listId}-${filter}`}
              role="option"
              aria-selected={value === filter}
              $active={activeIndex === index}
              onPointerDown={(event) => event.preventDefault()}
              onPointerMove={() => setActiveIndex(index)}
              onClick={() => select(filter)}
            >
              {labels[filter]}
            </SelectOption>
          ))}
        </SelectList>
      )}
    </SelectBox>
  );
}
