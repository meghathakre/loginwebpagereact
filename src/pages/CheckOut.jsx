import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const CheckOut=()=>{
 const navigate= useNavigate();
 const payDone=()=>{
      navigate("/paydone");
 }

    return(
        <>
          <h1 align="center"> Chekout Page</h1>
          <div id="chekout">
             <div>
               <h3> Shipping Address</h3>
               <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter address</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter city</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter pin code</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter mobile no</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
     
    </Form>
             </div>
             <div>
             <h3> Select Your Payment Method</h3>
             <input type='radio' name="pay" /> Cash On Delivery 
             <br/> <br/>
             <input type='radio' name="pay" /> Debit/Credit Card
             <br/> <br/>
             <input type='radio' name="pay" /> UPI/PhonePe 
             <br/> <br/>
             <input type='radio' name="pay" /> Internet Banking 
             <br/> <br/>
             <input type='radio' name="pay" /> Master Card
             <br/> <br/>
             <Button variant="primary" type="submit" onClick={payDone}>
        Submit
      </Button>
             </div>
          </div>
        </>
    )
}
export default CheckOut;