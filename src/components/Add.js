import React ,{useState} from 'react'
import {Button ,Modal,Form} from 'react-bootstrap'
export const Add = ({addMovie}) => {
const [show, setshow] = useState (false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rate, setRate] = useState('')
  const [posterUrl, setPosterUrl] = useState('')
const toogle=()=>
{
    setshow(!show)

}

const handleTitle=(e)=>{
    setTitle(e.target.value)
}
const handleDescription=(e)=>{
    setDescription(e.target.value)
}
const handleRate=(e)=>{
    setRate(e.target.value)
}
const handlePosterUrl=(e)=>{
    setPosterUrl(e.target.value)
}
       const handleadd=()=>{
           let newMovie = {
               title,
               description,
               rate,
               posterUrl
           }
           addMovie(newMovie)
           setTitle('')
           setDescription('')
           setRate('')
           setPosterUrl('')

       }

    return (
        <div>
               <>
      <Button variant="primary" onClick={toogle}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={toogle}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicTitle">
    <Form.Label>Title</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Enter title"
    value={title}
    onChange={ (e)=> handleTitle(e)}
     /> 
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicDescription">
     <Form.Label>Description</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Enter description"
    value={description}
    onChange={ (e)=> handleDescription(e)}
     />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicRate">
     <Form.Label>Rate</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Enter rate"
    value={rate}
    onChange={ (e)=> handleRate(e)}
     />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicposterUrl">
     <Form.Label>posterUrl</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Enter posterUrl"
    value={posterUrl}
    onChange={ (e)=> handlePosterUrl(e)}
     />
    
  </Form.Group>
  </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={toogle}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleadd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
            
        </div>
    )
}


export default Add;
