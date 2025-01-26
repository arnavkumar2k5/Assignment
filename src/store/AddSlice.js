import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../auth/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

export const fetchDetails = createAsyncThunk("students/fetchDetails", async () => {
  const querySnapshot = await getDocs(collection(db, "students"));
  const students = [];
  querySnapshot.forEach((doc) => {
    students.push({ id: doc.id, ...doc.data() });
  });
  return students;
});

export const addDetails = createAsyncThunk("students/addDetails", async (student) => {
  const docRef = await addDoc(collection(db, "students"), student);
  return { id: docRef.id, ...student };
});

export const editDetails = createAsyncThunk("students/editDetails", async (student) => {
  const studentDoc = doc(db, "students", student.id);
  await updateDoc(studentDoc, student);
  return student;
});

export const removeDetails = createAsyncThunk("students/removeDetails", async (id) => {
  const studentDoc = doc(db, "students", id);
  await deleteDoc(studentDoc);
  return id;
});

const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.students = action.payload;
      })
      .addCase(addDetails.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      .addCase(editDetails.fulfilled, (state, action) => {
        const index = state.students.findIndex((s) => s.id === action.payload.id);
        if (index !== -1) state.students[index] = action.payload;
      })
      .addCase(removeDetails.fulfilled, (state, action) => {
        state.students = state.students.filter((s) => s.id !== action.payload);
      });
  },
});

export default studentSlice.reducer;
