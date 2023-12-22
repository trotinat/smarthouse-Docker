package com.example.appareil.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Appareil {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;
    private String label;
    private String description;
    private boolean state;
    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String photo;

    @ManyToOne
    private Categorie categorie;


}
