import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
const AddDoctor = () => {

const [docImg, setDocImg] = useState(false)
const [doctorName, setDoctorName] = useState('')
const [speciality, setSpeciality] = useState('')
const [email, setEmail] = useState('')
const [education, setEducation] = useState('')
const [password, setPassword] = useState('')
const [experience, setExperience] = useState('1 Year')
const [fees, setFees] = useState('')
const [address1, setAddress1] = useState('')
const [address2, setAddress2] = useState('')

const [about, setAbout] = useState('')
const [degree, setDegree] = useState('')

    const {backendUrl,aToken} = useContext(AdminContext)
    


    const onSubmitHandler = async(event)=>{
        event.preventDefault()

        try {
            if (!docImg) {
                return toast.error('Image not selected')
            } 

            const formData = new FormData()

            formData.append('image',docImg)
             formData.append('name', doctorName)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('education', education)
            formData.append('experience', experience)
            formData.append('fees', Number(fees))
            formData.append('speciality', speciality)
          formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

            
            formData.append('about', about)
            formData.append('degree', degree)

            // console log form data 
            formData.forEach((value,key)=>{
                console.log(`${key} : ${value}`)
            })

            const response  = await axios.post(backendUrl + '/api/admin/add-doctor' , formData ,{headers:{aToken}} )

            if (response.data.success) {
                toast.success(response.data.message)
                setDocImg(false)
                setDoctorName('')
                setEmail('');
                setEducation('');
                setPassword('');
                setFees('');
                setAddress1('');
                setAddress2('');
                setAbout('');
                setDegree('');

            } else {
                toast.error(response.data.message || 'Something went wrong')
            }
        } catch (error) {
          toast.error(error.message)
          console.log(error)   
        }
    }


    return (
        <form onSubmit={onSubmitHandler} className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-sm mt-8">
            <p className="text-xl font-semibold text-gray-700 mb-6">Add Doctor</p>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Upload Section */}
                <div className="flex flex-col items-center justify-start">
                    <label htmlFor="doc-img" className="cursor-pointer border-2 border-dashed border-blue-300 p-2 rounded-xl hover:border-blue-500 transition">
                        <img
        src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
        alt="doctor"
        className="w-24 h-24 object-cover rounded-full"
      />
                    </label>
                  <input
      type="file"
      id="doc-img"
      accept="image/*"
      hidden
      onChange={(e) => {
        const file = e.target.files[0]
        if (file) {
          setDocImg(file)
        }
      }}
    />
                    <p className="text-sm text-gray-600 mt-2 text-center">Upload doctor<br />picture</p>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                    <div>
                        <p className="text-gray-700 mb-1 text-sm font-medium">Doctor name</p>
                        <input type="text" placeholder="Name" required value={doctorName}
  onChange={(e) => setDoctorName(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    </div>

                    <div>
                        <p className="text-gray-700 mb-1 text-sm font-medium">Speciality</p>
                        <select   value={speciality}
  onChange={(e) => setSpeciality(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                            <option value="General physician">General physician</option>
                            <option value="Gynecologist">Gynecologist</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Pediatricians">Pediatricians</option>
                            <option value="Neurologist">Neurologist</option>
                            <option value="Gastroenterologist">Gastroenterologist</option>
                        </select>
                    </div>

                    <div>
                        <p className="text-gray-700 mb-1 text-sm font-medium">Doctor Email</p>
                        <input type="email" placeholder="Your email" value={email}
  onChange={(e) => setEmail(e.target.value)} required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    </div>

                    <div>
                        <p className="text-gray-700 mb-1 text-sm font-medium">Education</p>
                        <input type="text" placeholder="Education" required  value={education}
  onChange={(e) => setEducation(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    </div>

                    <div>
                        <p className="text-gray-700 mb-1 text-sm font-medium">Doctor Password</p>
                        <input type="password" placeholder="Password" required   value={password}
  onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    </div>

                    <div>
                        <p className="text-gray-700 mb-1 text-sm font-medium">Address</p>
                        <input type="text" placeholder="Address 1"  value={address1}
  onChange={(e) => setAddress1(e.target.value)}required
                            className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                        <input type="text" placeholder="Address 2" value={address2}
  onChange={(e) => setAddress2(e.target.value)}required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    </div>
                                <div>
        <p className="text-gray-700 mb-1 text-sm font-medium">Degree</p>
        <input
            type="text"
            placeholder="Enter degree (e.g., MBBS, MD)"
            required
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        </div>
                            <div>
                        <p className="text-gray-700 mb-1 text-sm font-medium">Experience</p>
                        <select 
                        value={experience}
  onChange={(e) => setExperience(e.target.value)}className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                            {[...Array(10)].map((_, i) => (
                                <option key={i} value={`${i + 1} Year`}>{i + 1} Year</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <p className="text-gray-700 mb-1 text-sm font-medium">Fees</p>
                        <input type="number" placeholder="Your fees" value={fees}
  onChange={(e) => setFees(e.target.value)} required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="mt-6">
                <p className="text-gray-700 mb-1 text-sm font-medium">About me</p>
                <textarea placeholder="Write about yourself" rows={5} value={about}
  onChange={(e) => setAbout(e.target.value)} required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"></textarea>
            </div>

            <button type="submit"
                className="mt-6 bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Add doctor
            </button>
      

        </form>
    )
}

export default AddDoctor
