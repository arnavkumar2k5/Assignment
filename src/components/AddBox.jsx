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
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const validateForm = () => {
        const newErrors = {};

        if (!name) newErrors.name = "Name is required";
        if (!aclass) newErrors.aclass = "Class is required";
        if (!section) newErrors.section = "Section is required";
        if (!rollNo) newErrors.rollNo = "Roll number is required";
        if (!mobileNo) newErrors.mobileNo = "Mobile number is required";
        if (!email) newErrors.email = "Email is required";
        if (!fatherName) newErrors.fatherName = "Father's name is required";
        if (!motherName) newErrors.motherName = "Mother's name is required";
        if (!fatherEmail) newErrors.fatherEmail = "Father's email is required";
        if (!motherEmail) newErrors.motherEmail = "Mother's email is required";
        if (!fatherNo) newErrors.fatherNo = "Father's mobile no is required";
        if (!motherNo) newErrors.motherNo = "Mother's mobile no is required";

        const emailRegex = /\S+@\S+\.\S+/;
        if (email && !emailRegex.test(email)) newErrors.email = "Invalid email format";
        if (fatherEmail && !emailRegex.test(fatherEmail)) newErrors.fatherEmail = "Invalid father's email format";
        if (motherEmail && !emailRegex.test(motherEmail)) newErrors.motherEmail = "Invalid mother's email format";

        const mobileRegex = /^[0-9]{10}$/;
        if (mobileNo && !mobileRegex.test(mobileNo)) newErrors.mobileNo = "10 digits required";
        if (fatherNo && !mobileRegex.test(fatherNo)) newErrors.fatherNo = "10 digits required";
        if (motherNo && !mobileRegex.test(motherNo)) newErrors.motherNo = "10 digits required";

        return newErrors;
    };

    const addStudentDetailsHandler = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        setErrors(formErrors);

        if (Object.keys(formErrors).length > 0) {
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

        // Reset form
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
                <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-6">
                    <div className="relative">
                        {errors.name && <span className="absolute text-red-500 text-sm top-0 left-2">{errors.name}</span>}
                        <input
                            type="text"
                            placeholder={errors.name ? "" : "Enter your Name"}
                            className={`bg-gray-100 rounded border w-full ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4`}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, name: '' }));  // Clear error on input change
                            }}
                        />
                    </div>
                    <div className="relative">
                        {errors.aclass && <span className="absolute text-red-500 text-sm top-0 left-2">{errors.aclass}</span>}
                        <input
                            type="number"
                            placeholder={errors.aclass ? "" : "Enter your Class"}
                            className={`bg-gray-100 rounded border w-full ${errors.aclass ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4`}
                            value={aclass}
                            onChange={(e) => {
                                setaClass(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, aclass: '' }));  // Clear error on input change
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col md:grid grid-cols-2 gap-6">
                    <div className="relative">
                        {errors.section && <span className="absolute text-red-500 text-sm top-0 left-2">{errors.section}</span>}
                        <input
                            type="text"
                            placeholder={errors.section ? "" : "Enter your Section"}
                            className={`bg-gray-100 rounded border w-full ${errors.section ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4`}
                            value={section}
                            onChange={(e) => {
                                setSection(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, section: '' }));  // Clear error on input change
                            }}
                        />
                    </div>
                    <div className="relative">
                        {errors.rollNo && <span className="absolute text-red-500 text-sm top-0 left-2">{errors.rollNo}</span>}
                        <input
                            type="number"
                            placeholder={errors.rollNo ? "" : "Enter your Roll Number"}
                            className={`bg-gray-100 rounded border w-full ${errors.rollNo ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4`}
                            value={rollNo}
                            onChange={(e) => {
                                setRollNo(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, rollNo: '' }));  // Clear error on input change
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col md:grid grid-cols-2 gap-6">
                    <div className="relative">
                        {errors.mobileNo && <span className="absolute text-red-500 text-sm top-0 left-2">{errors.mobileNo}</span>}
                        <input
                            type="number"
                            placeholder={errors.mobileNo ? "" : "Enter your Mobile No"}
                            className={`bg-gray-100 rounded border w-full ${errors.mobileNo ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4`}
                            value={mobileNo}
                            onChange={(e) => {
                                setMobileNo(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, mobileNo: '' }));  // Clear error on input change
                            }}
                        />
                    </div>
                    <div className="relative">
                        {errors.email && <span className="absolute text-red-500 text-sm top-0 left-2">{errors.email}</span>}
                        <input
                            type="email"
                            placeholder={errors.email ? "" : "Enter your Email"}
                            className={`bg-gray-100 rounded border w-full ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4`}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, email: '' }));  // Clear error on input change
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col md:grid grid-cols-2 gap-6">
                    <div className="relative">
                        {errors.fatherName && <span className="absolute text-red-500 text-sm top-0 left-2">{errors.fatherName}</span>}
                        <input
                            type="text"
                            placeholder={errors.fatherName ? "" : "Enter Father's Name"}
                            className={`bg-gray-100 rounded border w-full ${errors.fatherName ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4`}
                            value={fatherName}
                            onChange={(e) => {
                                setFatherName(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, fatherName: '' }));  // Clear error on input change
                            }}
                        />
                    </div>
                    <div className="relative">
                        {errors.motherName && <span className="absolute text-red-500 text-sm top-0 left-2">{errors.motherName}</span>}
                        <input
                            type="text"
                            placeholder={errors.motherName ? "" : "Enter Mother's Name"}
                            className={`bg-gray-100 rounded border w-full ${errors.motherName ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4`}
                            value={motherName}
                            onChange={(e) => {
                                setMotherName(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, motherName: '' }));  // Clear error on input change
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col md:grid grid-cols-2 gap-6">
                    <div className="relative">
                        {errors.fatherEmail && <span className="absolute text-red-500 text-sm top-0 left-2">{errors.fatherEmail}</span>}
                        <input
                            type="email"
                            placeholder={errors.fatherEmail ? "" : "Enter Father's Email"}
                            className={`bg-gray-100 rounded border w-full ${errors.fatherEmail ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4`}
                            value={fatherEmail}
                            onChange={(e) => {
                                setFatherEmail(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, fatherEmail: '' }));  // Clear error on input change
                            }}
                        />
                    </div>
                    <div className="relative">
                        {errors.motherEmail && <span className="absolute text-red-500 text-sm top-0 left-2">{errors.motherEmail}</span>}
                        <input
                            type="email"
                            placeholder={errors.motherEmail ? "" : "Enter Mother's Email"}
                            className={`bg-gray-100 rounded border w-full ${errors.motherEmail ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4`}
                            value={motherEmail}
                            onChange={(e) => {
                                setMotherEmail(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, motherEmail: '' }));  // Clear error on input change
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col md:grid grid-cols-2 gap-6">
                    <div className="relative">
                        {errors.fatherNo && <span className="absolute text-red-500 text-sm top-0 left-2">{errors.fatherNo}</span>}
                        <input
                            type="number"
                            placeholder={errors.fatherNo ? "" : "Enter Father's Mobile No"}
                            className={`bg-gray-100 rounded border w-full ${errors.fatherNo ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4`}
                            value={fatherNo}
                            onChange={(e) => {
                                setFatherNo(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, fatherNo: '' }));  // Clear error on input change
                            }}
                        />
                    </div>
                    <div className="relative">
                        {errors.motherNo && <span className="absolute text-red-500 text-sm top-0 left-2">{errors.motherNo}</span>}
                        <input
                            type="number"
                            placeholder={errors.motherNo ? "" : "Enter Mother's Mobile No"}
                            className={`bg-gray-100 rounded border w-full ${errors.motherNo ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-gray-800 py-2 px-4`}
                            value={motherNo}
                            onChange={(e) => {
                                setMotherNo(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, motherNo: '' }));  // Clear error on input change
                            }}
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddBox;
