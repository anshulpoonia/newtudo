"use client"
import Navbar from '@/cmponents/Navbar'
import Head from 'next/head';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';


const Page = () => {
  const [title, setTilte] = useState('')
  const [desc, setDesc] = useState('')
  const [maintask, setMaintask] = useState([])

  let rendertask = <>
    <h1 className='text-center'>NO task</h1>
    <p className='text-center'>please enter some data</p>
  </>

  if (maintask.length > 0) {
    rendertask = maintask.map((task, index) => {
      return <li key={index}>
        <div className='flex justify-between m-2 p-2'>
          <h1>{task.title}</h1>
          <h3>{task.desc}</h3>
          <hr/>
          <button onClick={() => { deleteHandler(index) }} className='bg-red-700 rounded text-white text-sm m-2 p-2'>Delete</button>
        </div>
      </li>
    })
  }

  const deleteHandler = (index) => {
    let copytask = [...maintask]
    copytask.splice(index, 1)
    setMaintask(copytask)
    localStorage.removeItem(title, desc);
  }

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(title, desc)
    setMaintask([...maintask, { title, desc }])
    localStorage.setItem("tudos",[title, desc]);
    setTilte('')
    setDesc('')
    // console.log(maintask)
  }

  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>

        <script>var Alert = ReactBootstrap.Alert;</script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      </Head>
      {/* <div className=''>
        <h1 className='flex items-center justify-center bg-blue-400'>my tudo</h1>
      </div> */}
      <Navbar />
      {/* <form onSubmit={submitHandler} className='flex justify-center'>
        <input type="text" value={title} placeholder='enter your title' onChange={(e) => { setTilte(e.target.value) }} className='bg-slate-500 text-white m-2 p-2' />
        <input type="text" value={desc} placeholder='enter your desc' onChange={(e) => { setDesc(e.target.value) }} className='bg-slate-500 text-white m-2 p-2' />
        <button className='bg-blue-600 text-white rounded m-2 p-2'>add Task</button>
      </form> */}
      <Form onSubmit={submitHandler} className='justify-center items-center justify-items-center bg-slate-600 m-16 p-16 rounded-full'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title} placeholder='enter your title' onChange={(e) => { setTilte(e.target.value) }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Desc</Form.Label>
          <Form.Control  type="text" value={desc} placeholder='enter your desc' onChange={(e) => { setDesc(e.target.value) }} />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="info" className='rounded-full' type="submit">
          Add Task
        </Button>
      </Form>
      <hr />
      <div className='justify-center bg-slate-600 m-4 p-4 rounded'>
        <ul>
          {rendertask}
        </ul>
      </div>
    </>
  )
}

export default Page
