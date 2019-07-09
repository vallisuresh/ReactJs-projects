import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ModalModalExample = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Login</Modal.Header>
    <Modal.Content >
      
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <lable>
            <input type ="text"
            name="Loginid"
            value={this.statusbar.name}
            onChange={this.handleChange} />
            Login Name :
        </lable>

        <lable>
            <input type ="text"
            name="password"
            value={this.status.password}
            onChange={this.handleChange} />
            Password  :
        </lable>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample