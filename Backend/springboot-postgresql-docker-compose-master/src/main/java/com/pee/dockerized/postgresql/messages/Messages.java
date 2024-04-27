package com.pee.dockerized.postgresql.messages;

import java.time.LocalDateTime; 

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Messages")
public class Messages {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Column(name="sender_id")
    private String sender_id;

    @Column(name="receives")
    private String receives;

    @Column(name="text")
    private String text;

    @Column(name="date") 
    private LocalDateTime date = LocalDateTime.now();

    public Long getId() {
        return this.id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getSender_id() {
        return this.sender_id;
    }
    
    public void setSender_id(String sender_id) {
        this.sender_id = sender_id;
    }

    public String getReceives() {
        return this.receives;
    }
    
    public void setReceives(String receives) {
        this.receives = receives;
    }

    public String getText() {
        return this.text;
    }
    
    public void setText(String text) {
        this.text = text;
    }

    public LocalDateTime getDate() {
        return this.date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

}
