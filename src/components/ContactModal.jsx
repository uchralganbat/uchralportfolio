import { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';

export default function ContactModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
      
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };
      
      if (!formData.name || !formData.email || !formData.message) {
        alert("Please fill out all required fields");
        return;
      }

      emailjs.send('service_m2mh3us', 'template_3izw7gt', templateParams, 'CczPWwsnv-6R8aHU3')
        .then(() => {
          console.log('Email sent successfully!');
          setFormData({})
          onClose();
        }, (error) => {
          console.error('Error sending email:', error);
        });
    };
  
    return (
      <Modal isOpen={isOpen} onClose={() => { setFormData({})
      onClose()}}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Гоё хамтрах төсөл байвал нээлттэй шүү</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" value={formData.name} onChange={(e) => setFormData({...formData,['name']: e.target.value,})
                } />
              </FormControl>
  
              <FormControl isRequired mt={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={formData.email} onChange={(e) => setFormData({...formData,['email']: e.target.value,})} />
              </FormControl>
  
              <FormControl isRequired mt={4}>
                <FormLabel>Message</FormLabel>
                <Input type="textarea" value={formData.message} onChange={(e) => setFormData({...formData,['message']: e.target.value,})} />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>Send Email</Button>
              <Button onClick={() => { 
                setFormData({}) 
                onClose()}}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    );
  }
  