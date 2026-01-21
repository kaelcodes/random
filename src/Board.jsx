import React, { useEffect, useRef, useState } from "react";
import Sticky from "./Sticky";

const STORAGE_KEY = "sticky-board-notes:v1";
const DEFAULT_BOARD_SIZE = { width: 5000, height: 3000 };

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export default function Board() {
  const boardRef = useRef(null);
  const [notes, setNotes] = useState([]);
  const [nextZ, setNextZ] = useState(1);
  const [zoom, setZoom] = useState(1);

  // load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setNotes(parsed.notes || []);
        setNextZ(parsed.nextZ || 1);
      }
    } catch (e) {
      console.error("Failed to load notes", e);
    }
  }, []);

  // persist
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ notes, nextZ }));
  }, [notes, nextZ]);

  const createNoteAt = (x, y) => {
    const boardRect = boardRef.current.getBoundingClientRect();
    const nx
