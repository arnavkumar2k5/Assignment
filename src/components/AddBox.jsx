import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDetails } from "../store/AddSlice";

function AddBox() {
    const [name, setName] = useState('');
    const [aclass, setaClass] = useState('');
    const [section, setSection] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [email, setEmail] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [fatherEmail, setFatherEmail] = useState('');
    const [motherEmail, setMotherEmail] = useState('');
    const [fatherNo, setFatherNo] = useState('');
    const [motherNo, setMotherNo] = useState('');
    const dispatch = useDispatch();

    const addStudentDetailsHandler = (e) => {
        e.preventDefault();

        if (
            !name || !aclass || !section || !rollNo || !mobileNo || !email ||
            !fatherName || !motherName || !fatherEmail || !motherEmail ||
            !fatherNo || !motherNo
        ) {
            alert("All fields are required!")
            return;  
        }

        dispatch(
            addDetails({
                name,
                class: aclass,
                section,
                rollNo,
                mobileNo,
                email,
                father: fatherName,
                mother: motherName,
                fatherEmail,
                motherEmail,
                fatherNo,
                motherNo
            })
        );

        setName('');
        setaClass('');
        setSection('');
        setRollNo('');
        setMobileNo('');
        setEmail('');
        setFatherName('');
        setMotherName('');
        setFatherEmail('');
        setMotherEmail('');
        setFatherNo('');
        setMotherNo('');
    };

    return (
        <div className="md:max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg md:mt-10 md:ml-80 font-semibold">
            <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-6">Add Student Details</h2>
            <form onSubmit={addStudentDetailsHandler} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Enter your Name"
                        className="bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Enter your Class"
                        className="bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4"
                        value={aclass}
                        onChange={(e) => setaClass(e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Enter your Section"
                        className="bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4"
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Enter your Roll Number"
                        className="bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4"
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <input
                        type="number"
                        placeholder="Enter your Mobile No"
                        className="bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        className="bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Enter Father's Name"
                        className="bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4"
                        value={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter Mother's Name"
                        className="bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4"
                        value={motherName}
                        onChange={(e) => setMotherName(e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <input
                        type="email"
                        placeholder="Enter Father's Email"
                        className="bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4"
                        value={fatherEmail}
                        onChange={(e) => setFatherEmail(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Enter Mother's Email"
                        className="bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4"
                        value={motherEmail}
                        onChange={(e) => setMotherEmail(e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <input
                        type="number"
                        placeholder="Father's Mobile No"
                        className="bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4"
                        value={fatherNo}
                        onChange={(e) => setFatherNo(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Mother's Mobile No"
                        className="bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4"
                        value={motherNo}
                        onChange={(e) => setMotherNo(e.target.value)}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none transition-colors duration-300"
                    >
                        Add Student
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddBox;
