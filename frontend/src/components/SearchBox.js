import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
    const [keyword,setKeyword] = useState('')
    const Navigate = useNavigate();

    const submitHandler = (e) => { 
        e.preventDefault() 
        if(keyword.trim()){
          Navigate(`/search/${keyword}`)
        } else {
            Navigate('/');
            // Add no found results page
        }
    };

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-sucess" className="p-2">
        {" "}
        Search{" "}
      </Button>
    </Form>
  );
}

export default SearchBox