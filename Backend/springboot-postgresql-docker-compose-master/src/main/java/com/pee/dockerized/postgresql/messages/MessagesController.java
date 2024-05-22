package com.pee.dockerized.postgresql.messages;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Sort;

@CrossOrigin
@RestController
@RequestMapping("/api/messages")
public class MessagesController {

    @Autowired
    private MessagesRepository messagesRepository;
  
    @GetMapping
    public List<Messages> getAllUsers() {
        Sort sort = Sort.by(Sort.Direction.ASC, "date");
        return messagesRepository.findAll(sort);
    } 
  
    @GetMapping("/{sender_id}")
    public Messages getUserById(@PathVariable Long sender_id) {
        // Crea un objeto Sort para ordenar por la columna 'date' de forma ascendente
        // Sort sort = Sort.by(Sort.Direction.ASC, "date");
    
        // Realiza la consulta en el repositorio con los parámetros sender_id y receives, y la ordenación especificada
        return messagesRepository.findById(sender_id).get();
    }
  
    @PostMapping
    public Messages createUser(@RequestBody Messages messages) {
        Messages newMessage = new Messages();
        messages.setReceives("ia request");
        if (messages.getText().equals("hola")) {
            // Create a new Messages object
            newMessage.setSender_id("1");
            newMessage.setReceives("ia response");
            newMessage.setText("Bienvenido a coomeva");
            messagesRepository.save(messages);

            return messagesRepository.save(newMessage);
        }else{
             // Create a new Messages object
             newMessage.setSender_id("1");
             newMessage.setReceives("ia response");
             newMessage.setText("Muy interensante, gracias por tu mensaje");
             messagesRepository.save(messages);
 
             return messagesRepository.save(newMessage);
        }
        
    }
    
}
